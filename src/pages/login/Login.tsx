import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { ThreeDots } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/produtos');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-[#FFFFFF] font-rubik">
      <div className="flex justify-center items-center w-full h-screen px-10">
        <form onSubmit={login} className="flex flex-col w-full max-w-md gap-6">
          <h2 className="text-[#FF4D38] text-4xl font-bold mb-4 text-center">Acesse sua conta</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#FF4D38] font-semibold">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu e-mail cadastrado"
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#FF4D38] font-semibold">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
            />
          </div>

          <button
  type="submit"
  className="text-white bg-[#FF4D38] flex items-center justify-center py-2 px-8 rounded-xl shadow-md mt-4 mx-auto min-w-[150px] mb-6 cursor-pointer hover:bg-[#912C20]"
>
  {isLoading ? (
    <ThreeDots
      color="white"
      width="20"
      height="20"
      visible={true}
    />
    ) : (
      'Entrar'
    )}
</button>

<p className="text-center text-lg text-[#666666]">
  Ainda não tem conta?<br />
  Clique aqui e <Link to="/cadastro" className="text-[#666876] font-bold underline">cadastre-se!</Link>
</p>


        </form>
      </div>

      <div className="hidden lg:block w-full h-full">
        <img
          src="https://ik.imagekit.io/willa/pexels-polina-tankilevitch-5469204.jpg?updatedAt=1745503482590"
          alt="Imagem de balas coloridas"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}

export default Login;