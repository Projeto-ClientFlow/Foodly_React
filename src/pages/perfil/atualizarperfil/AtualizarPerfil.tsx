import { useState, useEffect, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Usuario from "../../../models/Usuario";
import { atualizarusuario, buscar } from "../../../services/Service";

function EditarPerfil() {
  const navigate = useNavigate();
  const [usuarioUpdate, setUsuarioUpdate] = useState<Usuario>({} as Usuario);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario.token) {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    } else {
      buscarUsuario();
    }
  }, [usuario.token, navigate]);

  async function buscarUsuario() {
    await buscar(`/usuarios/${usuario.id}`, setUsuarioUpdate, {
      headers: {
        Authorization: usuario.token,
      },
    });
  }

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuarioUpdate({
      ...usuarioUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmarSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmaSenha(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      confirmaSenha === usuarioUpdate.senha &&
      usuarioUpdate.senha.length >= 8
    ) {
      setIsLoading(true);
      try {
        await atualizarusuario("/usuarios/atualizar", usuarioUpdate, setUsuarioUpdate, {
          headers: {
            Authorization: usuario.token,
          },
        });
        ToastAlerta("Perfil atualizado com sucesso! Faça login novamente.", "sucesso");
        handleLogout(); 
        navigate("/login"); 
      } catch (error) {
        ToastAlerta("Erro ao atualizar o perfil!", "erro");
      }
      setIsLoading(false);
    } else {
      alert("Dados inconsistentes! Verifique as informações.");
      setConfirmaSenha("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-120px)] bg-white">
      {/* Seção do Formulário */}
      <div className="w-full lg:w-1/2 flex justify-center p-6 lg:p-10">
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md flex flex-col gap-4"
        >
          <h2 className="text-[#FF4D38] text-3xl lg:text-4xl font-bold mb-2 mt-[80px]">
            Atualize seu Perfil
          </h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#FF4D38] font-semibold mb-1">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="w-full bg-[#ffeeec] px-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={usuarioUpdate.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#FF4D38] font-semibold mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Digite seu e-mail"
              className="w-full bg-[#ffeeec] px-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={usuarioUpdate.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#FF4D38] font-semibold mb-1">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Informe o link da sua foto"
              className="w-full bg-[#ffeeec] px-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={usuarioUpdate.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#FF4D38] font-semibold mb-1">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua nova senha"
              className="w-full bg-[#ffeeec] px-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={usuarioUpdate.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-[#FF4D38] font-semibold mb-1">
              Confirme a sua senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Digite sua senha novamente"
              className="w-full bg-[#ffeeec] px-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF4D38] text-white font-semibold px-8 py-3 rounded-xl border border-[#FF4D38]/50 hover:bg-[#e04430] mt-4 w-full sm:w-1/2 mx-auto flex justify-center items-center"
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
              "Atualizar"
            )}
          </button>
        </form>
      </div>

      {/* Seção da Imagem */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto lg:min-h-[calc(100vh-120px)]">
        <img
          src="https://ik.imagekit.io/willa/pexels-dagmara-dombrovska-22732579-8020366.jpg?updatedAt=1745503482590"
          alt="Atualização do perfil"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default EditarPerfil;