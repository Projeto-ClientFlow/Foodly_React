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
            ToastAlerta("A categoria foi atualizada com sucesso!", "sucesso");
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
                ToastAlerta("Erro ao buscar categorias!", "erro");
            }
        }

        carregarCategorias();
    }, [token]);

    return (
        <div className="flex min-h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-4xl font-bold text-[#FF4D38] mb-6 mt-10 text-Henter">
                    Atualizar categoria
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={atualizarCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FF4D38] font-bold mb-0 text-lg">
                            Descrição
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            name="descricao"
                            className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                            value={categoria.descricao || ""}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-[#FF4D38] flex items-center justify-center py-2 px-8 rounded-xl shadow-md mt-4 mx-auto min-w-[150px] mb-6 cursor-pointer hover:bg-[#912C20]"
                    >
                        {isLoading ? (
                            <ThreeDots
                                color="white"
                                width="20"
                                height="20"
                                visible={true}
                            />
                        ) : (
                            <span>Atualizar</span>
                        )}
                    </button> 
                </form>
            </div>

            <div className="w-1/2 hidden md:flex justify-center items-center  p-0">
                <img
                    src="https://ik.imagekit.io/willa/melissa-di-rocco-wIVK756L0VU-unsplash.jpg?updatedAt=1745522160250"
                    alt="Cadastro do Produto"
                    className="w-full h-[105vh] object-cover object-bottom"
                />
            </div>
        </div>
    );
}

export default AtualizarCategoria;