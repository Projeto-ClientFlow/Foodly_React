import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";


function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="w-full font-rubik py-4 px-4 bg-[#FFF5F3] text-[#FF4D38] fixed border-b border-[#FF4D38] z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/produtos" className="text-4xl font-bold">
            Foodly
          </Link>

          <div className="flex items-center gap-6 text-lg font-semibold">
            <Link to="/cadastrar-produto" className="hover:underline">
              Cadastrar Produto
            </Link>
            <Link to="/cadastrar-categoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/categorias" className="hover:underline">
              Ver Categorias
            </Link>
            <Link to="/perfil" className="hover:underline">
              Perfil
            </Link>
            <button
              onClick={logout}
              className="bg-[#FF4D38] text-white py-2 px-4 rounded-lg hover:bg-[#e04430]  transition cursor-pointer"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    component = (
      <div className="w-full font-rubik py-4 px-4 bg-[#FFF5F3] text-[#FF4D38] fixed border-b border-[#FF4D38] z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/home" className="text-4xl font-bold">
            Foodly
          </Link>

          <div className="flex items-center gap-6 text-lg font-semibold">
            <Link to="/sobre-nos" className="hover:underline">
              Sobre nós
            </Link>
            <Link to="/cadastro" className="hover:underline">
              Cadastre-se
            </Link>
            <Link
              to="/login"
              className="bg-[#FF4D38] text-white py-2 px-4 rounded-lg hover:bg-[#e04430] transition"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;