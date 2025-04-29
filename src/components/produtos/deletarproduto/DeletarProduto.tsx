import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ThreeDots } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";

function DeletarProduto() {
const navigate = useNavigate();
const { id } = useParams<{ id: string }>();
const [produto, setProduto] = useState<Produto>({} as Produto);
const [isLoading, setIsLoading] = useState(false);

const { usuario } = useContext(AuthContext);
const token = usuario.token;

const buscarPorId = useCallback(
    async (id: string) => {
    try {
        await listar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
        });
    } catch (error) {
        ToastAlerta("Erro ao buscar produto", "erro");
        console.error("Erro ao buscar produto:", error);
    }
    },
    [token]
);

async function deletarProduto() {
    setIsLoading(true);
    try {
    await deletar(`/produtos/${id}`, {
        headers: { Authorization: token },
    });
    ToastAlerta("Produto apagado com sucesso", "sucesso");
    navigate("/produtos");
    } catch (error) {
    ToastAlerta("Erro ao deletar o produto", "erro");
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
    <div className="container w-1/3 mx-auto pt-24 min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl text-center my-4 text-[#FF4D38] font-bold">
            Exclusão produto
        </h1>
        <h2 className="text-center text-2xl font-semibold mb-4 text-[#666876]">
            Você tem certeza de que deseja deletar o produto a seguir?
        </h2>

        {produto?.id ? (
            <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between p-2 mb-15">
                <div className="flex flex-col items-center justify-center h-full p-2">
                    {produto.precoProduto > 100 && (
                    <img
                        src="https://ik.imagekit.io/willa/desconto.png?updatedAt=1745526735577"
                        alt="desconto"
                        className="w-10 h-10 mt-4"
                    />
                    )}

                    <h2 className="text-2xl font-bold mb-2 mt-2 text-[#FF4D38] text-center">{produto.nomeProduto}</h2>

                    <div className="flex flex-col justify-center h-full p-2">
                    
                        <div className="flex justify-center w-full py-4 items-center">
                            <img
                                src={produto.foto || 'https://ik.imagekit.io/willa/6061bd47-2818-4f2b-b04a-5a9ddb6f6467.png?updatedAt=1745586625445'}
                                alt={`Foto do produto ${produto.nomeProduto}`}
                                className="w-120 h-40 object-cover rounded-xl shadow-md"
                            />
                        </div>

                        <div className="text-1xl bg-white text-[#858690] text-center">
                            <span className="font-bold">Descrição: </span>
                            <span>{produto.descricaoProduto}</span>
                        </div>
                        <div className="text-1xl bg-white text-[#858690] text-center">
                            <span className="font-bold">Tamanho: </span>
                            <span>{produto.tamanhoPorcao} gramas</span>
                        </div>
                        <div className="text-1xl bg-white text-[#858690] text-center">
                            <span className="font-bold">Preço: </span>
                            <span>
                                R${" "}
                                {produto.precoProduto
                                ? produto.precoProduto.toFixed(2).replace(".", ",")
                                : "0,00"}
                            </span>
                        </div>
                        <div className="text-1xl bg-white text-[#858690] text-center">
                            <span className="font-bold">Categoria: </span>
                            <span>{produto.categoria?.descricao}</span>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button
                    onClick={() => navigate("/produtos")}
                    className="w-full text-white bg-[#FF4D38] hover:bg-[#912C20] flex items-center justify-center py-2 rounded-xl font-semibold cursor-pointer"
                    >
                    Não
                    </button>

                    <button
                    onClick={deletarProduto}
                    className="w-full text-white bg-gray-600 hover:bg-gray-800 flex items-center justify-center py-2 rounded-xl font-semibold cursor-pointer"
                    disabled={isLoading}
                    >
                    {isLoading ? (
                    <ThreeDots color="white" width="20" height="20" visible={true} />
                    ) : (
                    <span>Sim</span>
                    )}
                    </button>
                </div>
            </div>
        ) : (
            <p className="text-center mt-10 text-[#666]">Carregando produto...</p>
        )}
    </div>
);
}

export default DeletarProduto;