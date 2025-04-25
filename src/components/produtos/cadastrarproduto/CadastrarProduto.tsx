import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { ThreeDots } from "react-loader-spinner";
import { buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";

function CadastrarProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/produtos");
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!produto.nomeProduto?.trim()) {
            ToastAlerta("Preencha o nome do produto!", "warn");
            return;
        }

        setIsLoading(true);

        try {
            await cadastrar(`/produtos`, produto, setProduto, {
                headers: {
                    Authorization: token,
                },
            });

            ToastAlerta("O produto foi cadastrado com sucesso!", "sucesso");

            setTimeout(() => {
                retornar();
            }, 1500);
        } catch (error: any) {
            ToastAlerta("Erro ao cadastrar o produto.", "erro");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        async function carregarCategoria() {
            try {
                await buscar("/categorias", setCategoria, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                ToastAlerta("Erro ao buscar categorias!", "erro");
            }
        }

        carregarCategoria();
    }, [token]);

    return (
        <div className="flex pt-16 min-h-screen bg-[#f9f9f9]">
            {/* Coluna do formulário */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-4xl font-bold text-[#FF4D38] mb-6 mt-10 text-center">
                    Crie seu produto
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                    {/* Nome */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome do seu produto"
                            name="nomeProduto"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={produto.nomeProduto || ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    {/* Descrição */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Descrição
                        </label>
                        <input
                            type="text"
                            placeholder="Digite a descrição do seu produto"
                            name="descricaoProduto"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={produto.descricaoProduto || ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    {/* Preço */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="preco" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Preço
                        </label>
                        <input
                            type="number"
                            placeholder="Digite o preço do seu produto"
                            name="precoProduto"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={produto.precoProduto !== undefined ? produto.precoProduto : ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    {/* Tamanho da porção */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tamanhoPorcao" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Tamanho da sua porção (em gramas)
                        </label>
                        <input
                            type="number"
                            placeholder="Digite o peso do seu produto"
                            name="tamanhoPorcao"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={produto.tamanhoPorcao !== undefined ? produto.tamanhoPorcao : ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    {/* Foto */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="foto" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Insira a URL da imagem do seu produto
                        </label>
                        <input
                            placeholder="Digite a URL da imagem do seu produto"
                            name="foto"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={produto.foto || ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    {/* Exibe o card da imagem APENASSSSS se o campo foto estiver preenchido */}
                    {produto.foto && (
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="text-[#FF4D38] font-bold mb-0 text-lg">
                                Pré-visualização da imagem
                            </label>
                            <img
                                src={produto.foto}
                                alt="imagem do produto"
                                className="w-full h-64 object-cover rounded-xl border border-[#FF4D38]/50"
                            />
                        </div>
                    )}

                    {/* Categoria */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoria" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Categoria
                        </label>
                        <select
                            name="categoria"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl text-gray-500 border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={produto.categoria?.id || ""}
                            onChange={(e) => {
                                const categoriaSelecionada = categoria.find(cat => cat.id === Number(e.target.value));
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

                    {/* Botão */}
                    <button
                        className="text-white bg-[#FF4D38] flex items-center justify-center py-2 px-8 rounded-xl shadow-md mt-4 mx-auto min-w-[150px]"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ThreeDots
                                color="white"
                                height={20} // Altura do botão
                                width={40}  // Largura do botão
                                visible={true}
                                ariaLabel="loading"
                            />
                        ) : (
                            <span> Cadastrar</span>
                        )}
                    </button>
                </form>
            </div>

            {/* Coluna da imagem */}
            <div className="w-1/2 hidden md:flex justify-center items-center p-0">
                <img
                    src="https://ik.imagekit.io/willa/pexels-adonyi-foto-2064359.jpg?updatedAt=1745500406158"
                    alt="Cadastro do Produto"
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
}

export default CadastrarProduto;
