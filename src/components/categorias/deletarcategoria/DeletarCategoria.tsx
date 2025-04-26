import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

function DeletarCategoria() {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState(false);


    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const buscarPorId = useCallback(
        async (id: string) => {
            try {
                await buscar(`/categorias/${id}`, setCategoria, {
                    headers: { Authorization: token },
                });
            } catch (error) {
                ToastAlerta("Erro ao buscar categoria", "erro");
                console.error("Erro ao buscar categoria:", error);
            }
        },
        [token]
    );

    async function deletarCategoria() {
        setIsLoading(true);
        try {
            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token },
            });
            ToastAlerta("Categoria deletada com sucesso", "sucesso");
            navigate("/categorias");
        } catch (error) {
            ToastAlerta("Erro ao deletar categoria", "erro");
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (!token) {
            ToastAlerta("Você precisa estar logado", "info");
            navigate("/login");
            return;
        }

        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id, token, navigate, buscarPorId]);

    return (
        <div className="flex items-center justify-center min-h-screen  pt-[100px]">
            <div className="bg-white p-8 max-w-md w-full text-center">
                <h2 className="text-4xl font-bold text-[#FF4D38] mb-8">Exclusão de categoria</h2>
                <p className="text-2xl text-gray-700 mb-8">
                    Deseja realmente deletar a categoria{" "}
                    <span className="font-semibold text-[#FF4D38]">
                        {categoria?.descricao}
                    </span>
                    ?
                </p>
                <div className="flex space-x-4 justify-center">
                    <button
                        onClick={() => navigate("/categorias")}
                        className="w-full text-white bg-[#FF4D38] rounded-[10px] hover:bg-[#912C20] transition-all cursor-pointer flex items-center justify-center py-2  font-semibold"
                        >
                        Cancelar
                        
                    </button>
                    <button
                         onClick={deletarCategoria}
                         className="w-full text-white bg-gray-600 hover:bg-gray-800 cursor-pointer flex items-center justify-center py-2 rounded-[10px]  font-semibold"
                         disabled={isLoading}
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
                             <span>Deletar</span>
                         )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;
