import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { atualizar, buscar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import "./AtualizarCategoria.css"

function AtualizarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        async function listarCategorias(id: string) {
            try {
                await listar(`/categorias/${id}`, setCategoria, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                console.error("Erro ao buscar categoria:", error.response ?? error);
                ToastAlerta("Erro ao buscar categoria.", "erro");
                navigate("/categorias");
            }
        }

        if (id !== undefined) {
            listarCategorias(id);
        }
    }, [id, token, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function atualizarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            await atualizar(
                "/categorias",
                { ...categoria, id: Number(id) },
                { headers: { Authorization: token } }
            );
            ToastAlerta("A categoria foi atualizada com sucesso!", "succes");
            retornar();
        } catch (error: any) {
            ToastAlerta("Erro ao atualizar categoria.", "erro");
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
                ToastAlerta("Erro ao buscar categorias!", "error");
            }
        }

        carregarCategorias();
    }, [token]);

    return (
        <div className="flex pt-16 min-h-screen bg-white">
            <div className="w-1/2 flex flex-col justify-center items-center px-12 pb-40">
                <h1 className="text-3xl font-bold text-[#FF4D38] mb-6 mt-10 text-center">
                    Atualize a categoria
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={atualizarCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" 
                        className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Descrição
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            name="descricao"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={categoria.descricao || ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#FF4D38] text-white font-semibold px-6 rounded-lg hover:bg-[#912C20] transition-colors mx-auto block cursor-pointer min-w-[150px] flex justify-center items-center h-12"
                    >
                        {isLoading ? (
                            <ThreeDots
                                color="white"
                                width="40"
                                height="20"
                                visible={true}
                            />
                        ) : (
                            'Atualizar'
                        )}
                    </button>



                </form>
            </div>

            <div className="w-1/2 hidden md:flex justify-center items-center  p-0">
                <img
                    src="https://ik.imagekit.io/willa/melissa-di-rocco-wIVK756L0VU-unsplash.jpg?updatedAt=1745522160250"
                    alt="Atualizar categoria"
                    className="w-full h-[105vh] object-cover object-bottom"
                />
            </div>
        </div>
    );
}

export default AtualizarCategoria;