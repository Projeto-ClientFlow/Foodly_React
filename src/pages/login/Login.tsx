import { useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';


function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-[#FFF5F3] font-sans">
      
 
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
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
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
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}

            />
          </div>

          <button
            type="submit"
            className="bg-[#FF4D38] text-white font-semibold px-8 py-2 rounded hover:bg-[#e04430] mt-2"

          > {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}/> :
            <span>Entrar</span>
          }
          </button>

          <p className="text-center text-sm text-[#666666]">
            Ainda não tem conta?<br />
            Clique aqui e <a href="/cadastro" className="text-[#FF4D38] font-semibold underline">Cadastre-se!</a>
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