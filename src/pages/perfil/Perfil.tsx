import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token, navigate]);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Capa com foco nos pirulitos */}
      <div className="relative w-full h-[360px]">
        <img
          className="w-full h-full object-cover object-[center_30%]"
          src="https://i.imgur.com/6IVgr3M.jpg"
          alt="Capa do Perfil"
        />

        {/* Foto de perfil centralizada nos pirulitos */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-40 h-40 rounded-full border-[10px] border-white object-cover shadow-lg"
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
        </div>
      </div>

      {/* Conteúdo abaixo */}
      <div className="w-full max-w-3xl px-4 py-12 text-center">
        <p className="text-lg font-semibold mb-2">
          <strong>Nome:</strong> {usuario.nome}
        </p>
        <p className="text-lg font-semibold mb-2">
          <strong>E-mail:</strong> {usuario.usuario}
        </p>
        <p className="text-lg font-semibold mb-6">
          <strong>Foto:</strong> {usuario.foto}
        </p>

        {/* Botões */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/editar-perfil")}
            className="bg-[#FF4D38] hover:bg-[#e64532] text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Editar
          </button>
          <button
            onClick={() => navigate("/deletar-perfil")}
            className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;