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
    <div className="w-full min-h-screen bg-white flex flex-col items-center font-rubik">
      <div className="relative w-full h-[360px]">
        <img
          className="w-full h-full object-fill object-center"
          src="https://i.imgur.com/3UtpyeJ.png"
          alt="Capa do Perfil"
        />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12">
          <img
            className="w-45 h-45 rounded-full border-[20px] border-white object-cover shadow-lg"
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
        </div>
      </div>

      <div className="w-full max-w-3xl px-4 py-12 text-center">
        <p className="text-lg font-regular mb-2">
          <strong>Nome:</strong> {usuario.nome}
        </p>
        <p className="text-lg font-regular mb-12">
          <strong>E-mail:</strong> {usuario.usuario}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(`/editar-perfil/${usuario.id}`)}
            className="bg-[#FF4D38] hover:bg-[#e64532] text-white font-semibold px-6 py-2 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38] transition cursor-pointer shadow-md"
          >
            Editar
          </button>
          <button
            onClick={() => navigate("/deletar-perfil")}
            className="bg-gray-600 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl  focus:outline-none focus:ring-2 focus:ring-[#FF4D38] transition cursor-pointer shadow-md"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;