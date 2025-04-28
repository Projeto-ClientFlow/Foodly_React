import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Usuario from "../../../models/Usuario";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarPerfil() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [usuarioDelete, setUsuarioDelete] = useState<Usuario>({} as Usuario);

  useEffect(() => {
    if (!usuario.token) {
      ToastAlerta("Você precisa estar logado","info");
      navigate("/");
    } else {
      buscarUsuario();
    }
  }, [usuario.token]);

  async function buscarUsuario() {
    await buscar(`/usuarios/${usuario.id}`, setUsuarioDelete, {
      headers: {
        Authorization: usuario.token
      }
    });
  }

  async function confirmarExclusao() {
    try {
      await deletar(`/usuarios/${usuario.id}`, {
        headers: {
          Authorization: usuario.token
        }
      });
      ToastAlerta("Usuário deletado com sucesso!", "sucesso");
      handleLogout();
      navigate("/");
    } catch (error) {
      ToastAlerta("Erro ao deletar o perfil!", "erro");
    }
  }

  function cancelar() {
    navigate("/perfil");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFfff] font-rubik">
      <div className="flex flex-col w-3/4 md:w-1/2 gap-8 text-center">
        <h2 className="text-[#FF4D38] text-4xl font-bold">Exclusão de Perfil</h2>

        <p className="text-2xl font-bold text-[#666876]">
          <span className="text-[#FF4D38]">{usuarioDelete.nome}</span>, tem certeza que deseja apagar seu perfil?
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={cancelar}
            className="bg-[#FF4D38] text-white font-semibold px-6 py-2 rounded-xl border border-[#FF4D38]/50 hover:bg-[#e04430] focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
          >
            Cancelar
          </button>

          <button
            onClick={confirmarExclusao}
            className="bg-gray-600 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
          >
            Deletar
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeletarPerfil;