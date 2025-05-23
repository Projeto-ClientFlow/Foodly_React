import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import { atualizar, buscar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

function AtualizarProduto() {
const navigate = useNavigate();
const [produto, setProduto] = useState<Produto>({} as Produto);
const [isLoading, setIsLoading] = useState<boolean>(false);
const { id } = useParams<{ id: string }>();
const [categoria, setCategoria] = useState<Categoria[]>([]);
const { usuario } = useContext(AuthContext);
const token = usuario.token;

useEffect(() => {
    async function listarProduto(id: string) {
    try {
        await listar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
        });
    } catch (error: any) {
        console.error("Erro ao buscar produto:", error.response ?? error);
        ToastAlerta("Erro ao buscar o produto.", "erro");
        navigate("/produtos");
    }
    }

    if (id !== undefined) {
    listarProduto(id);
    }
}, [id, token, navigate]);

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
    ...produto,
    [e.target.name]: e.target.value,
    });
}

function retornar() {
    navigate("/produtos");
}

async function atualizarProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!produto.categoria) {
    ToastAlerta("Selecione uma categoria antes de atualizar.", "info");
    setIsLoading(false);
    return;
    }

    try {
    await atualizar(
        "/produtos",
        { ...produto, id: Number(id) },
        { headers: { Authorization: token } }
    );
    ToastAlerta("O produto foi atualizado com sucesso!", "sucesso");
    retornar();
    } catch (error: any) {
    ToastAlerta("Erro ao atualizar o produto.", "erro");
    console.error(error);
    }

    setIsLoading(false);
}

useEffect(() => {
    async function carregarCategorias() {
    try {
        await buscar("/categorias", setCategoria, {
        headers: { Authorization: token },
        });
    } catch (error) {
        ToastAlerta("Erro ao buscar categorias!", "erro");
    }
    }

    carregarCategorias();
}, [token]);

return (
    <div className="flex pt-16 min-h-screen bg-white">
    <div className="w-1/2 flex flex-col justify-center items-center px-12">
        <h1 className="text-3xl font-bold text-[#FF4D38] mb-6 mt-10 text-center">
        Atualize o produto
        </h1>

        <form
        className="w-full flex flex-col gap-4"
        onSubmit={atualizarProduto}
        >
        <div className="flex flex-col gap-2">
            <label htmlFor="nome" 
            className="text-[#FF4D38] font-bold mb-0 text-lg">
            Nome do Produto
            </label>
            <input
            type="text"
            placeholder="Digite o nome do produto"
            name="nomeProduto"
            className="w-full bg-[#ffeeec] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
            value={produto.nomeProduto || ""}
            onChange={atualizarEstado}
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
            htmlFor="descricao"
            className="text-[#FF4D38] font-bold mb-0 text-lg"
            >
            Descrição
            </label>
            <input
            type="text"
            placeholder="Digite a descrição do produto"
            name="descricaoProduto"
            className="w-full bg-[#ffeeec] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
            value={produto.descricaoProduto || ""}
            onChange={atualizarEstado}
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
            htmlFor="tamanhoPorcao"
            className="text-[#FF4D38] font-bold mb-0 text-lg"
            >
            Tamanho da porção
            </label>
            <input
            type="text"
            placeholder="Digite o tamanho da porção"
            name="tamanhoPorcao"
            className="w-full bg-[#ffeeec] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
            value={produto.tamanhoPorcao || ""}
            onChange={atualizarEstado}
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
            htmlFor="preco"
            className="text-[#FF4D38] font-bold mb-0 text-lg"
            >
            Preço
            </label>
            <input
            type="number"
            placeholder="Digite o preco do produto"
            name="precoProduto"
            className="w-full bg-[#ffeeec] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
            value={produto.precoProduto || ""}
            onChange={atualizarEstado}
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
            htmlFor="foto"
            className="text-[#FF4D38] font-bold mb-0 text-lg"
            >
            Foto
            </label>
            <input
            type="text" // Mantivemos como string para o link da foto
            placeholder="Insira o link da foto do produto"
            name="foto"
            className="w-full bg-[#ffeeec] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
            value={produto.foto || ""}
            onChange={atualizarEstado}
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
            htmlFor="categoria"
            className="text-[#FF4D38] font-bold mb-0 text-lg"
            >
            Categoria
            </label>
            <select
            name="categoria"
            className="w-full bg-[#ffeeec] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
            value={produto.categoria?.id || ""}
            onChange={(e) => {
                const categoriaSelecionada = categoria.find(
                (cat) => cat.id === Number(e.target.value)
                );
                setProduto({ ...produto, categoria: categoriaSelecionada });
            }}
            >
            <option value="" disabled>
                Selecione uma categoria
            </option>
            {categoria.map((cat) => (
                <option key={cat.id} value={cat.id}>
                {cat.descricao}
                </option>
            ))}
            </select>
        </div>

        <div className="flex justify-center gap-4 mt-4 mb-7">
            <button
            className="text-white bg-[#FF4D38] hover:bg-[#e04430] flex items-center justify-center h-10 w-[120px] rounded-lg shadow-md min-w-[150px] cursor-pointer"
            type="submit"
            disabled={isLoading}
            >
            {isLoading ? (
                <ThreeDots
                color="white"
                width={20}
                visible={true}
                ariaLabel="loading"
                />
            ) : (
                <span>Atualizar</span>
            )}
            </button>
        </div>
        </form>
    </div>

    <div className="w-1/2 hidden md:flex justify-center items-center p-0">
        <img
        src="https://ik.imagekit.io/willa/pexels-pixabay-59999.jpg?updatedAt=1745522160250"
        alt="Atualizar produto"
        className="w-full h-[103vh] object-cover"
        />
    </div>
    </div>
);
}

export default AtualizarProduto;