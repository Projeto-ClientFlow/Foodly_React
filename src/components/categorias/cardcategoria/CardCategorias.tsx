import { Link } from 'react-router-dom'
import Categorias from "../../../models/Categoria"

interface CardCategoriasProps {
    categoria: Categorias
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="bg-white rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-between items-center w-full aspect-[1/1.1] max-h-[240px]">
            <div className="flex-1 flex items-center justify-center text-center px-2">
                <h2 className="text-[#FF4D38] font-bold text-2xl break-words">
                    {categoria.descricao}
                </h2>
            </div>

            <div className="flex gap-4 w-full justify-center mt-4">
                <Link to={`/atualizarcategoria/${categoria.id}`}>
                    <button className="bg-[#FF4D38] hover:bg-[#912C20] text-white font-semibold py-2 px-6 rounded-lg text-base transition-all cursor-pointer">
                        Editar
                    </button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}>
                    <button className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg text-base transition-all cursor-pointer">
                        Deletar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias;

