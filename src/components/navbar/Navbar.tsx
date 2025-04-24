import { Link } from "react-router-dom";


function Navbar() {


    
    
  return (


    <div className="w-full font-rubik py-4 px-4 bg-[#FFF5F3] text-[#FF4D38] fixed border-b border-[#FF4D38] z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
        to="/home"
        className="text-4xl font-bold"
        >
        Foodly
        </Link>

        <div className="flex items-center gap-6 text-lg font-semibold">
        <Link to="/sobre-nos" className="hover:underline">
        Sobre nós
        </Link>
        <Link to="/produtos" className="hover:underline">
        Cadastre-se
        </Link>
        <Link
        to="/categorias"
        className="bg-[#FF4D38] text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
          >
        Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
