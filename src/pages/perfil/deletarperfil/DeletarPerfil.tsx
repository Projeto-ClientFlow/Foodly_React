import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";


function DeletarPerfil() {
  const navigate = useNavigate();
  const { setUsuario } = useContext(AuthContext);
  const [confirmar, setConfirmar] = useState(false);

  const handleDeletar = () => {
    setUsuario(null); 
    alert("Perfil deletado com sucesso!");
    navigate("/"); 
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-semibold mb-6 mt-[25vh] text-[#FF4D38]">Exclusão de Perfil</h1>
      <p className="text-lg mb-6 ">
        Tem certeza de que deseja deletar seu perfil? Esta ação não pode ser desfeita.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/perfil")}
          className="bg-[#FF4D38] text-white font-semibold px-6 py-2 rounded-lg"
        >
          Cancelar
        </button>
        <button
          onClick={() => setConfirmar(true)}
          className="bg-black text-white font-semibold px-6 py-2 rounded-lg"
        >
          Deletar
        </button>
      </div>

      {confirmar && (
        <div className="mt-6">
          <button
            onClick={handleDeletar}
            className="bg-red-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Confirmar Deletação
          </button>
        </div>
      )}
    </div>
  );
}

export default DeletarPerfil;