import { useState, useEffect, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function EditarPerfil() {
  const navigate = useNavigate();
  const { usuario} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.usuario);
  const [foto, setFoto] = useState(usuario.foto);

  useEffect(() => {
    if (!usuario.token) {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token, navigate]);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'nome') setNome(value);
    if (name === 'usuario') setEmail(value);
    if (name === 'foto') setFoto(value);
  };

  const handleConfirmarSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmaSenha(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        const updatedUser = { ...usuario, nome, usuario: email, foto };
        setUsuario(updatedUser); 
        ToastAlerta("Perfil atualizado com sucesso!", "sucesso");
        navigate("/perfil"); 
      } catch (error) {
        ToastAlerta("Erro ao atualizar o perfil!", "erro");
      }
      setIsLoading(false);
    } else {
      alert("Dados inconsistentes! Verifique as informações.");
      setConfirmaSenha('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-[#FFF5F3] font-sans">
      {/* Formulário à esquerda */}
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="flex flex-col w-3/4 gap-4">
          <h2 className="text-[#FF4D38] text-4xl font-bold mb-4">Atualize seu Perfil</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#FF4D38] font-semibold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={nome}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#FF4D38] font-semibold">E-mail</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Digite seu e-mail"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={email}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#FF4D38] font-semibold">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Informe o link da sua foto"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#FF4D38] font-semibold">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua nova senha"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-[#FF4D38] font-semibold">Confirme a sua senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Digite sua senha novamente"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF4D38] text-white font-semibold px-8 py-2 rounded hover:bg-[#e04430] mt-2 w-full flex justify-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              'Atualizar'
            )}
          </button>
        </form>
      </div>

      {/* Imagem à direita */}
      <div className="hidden lg:flex justify-center items-center h-full">
        <img
          src="https://ik.imagekit.io/willa/pexels-dagmara-dombrovska-22732579-8020366.jpg?updatedAt=1745503482590"
          alt="Atualização do perfil"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default EditarPerfil;

