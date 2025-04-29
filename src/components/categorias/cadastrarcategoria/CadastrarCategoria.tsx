import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";
import { cadastrar } from "../../../services/Service";
import "./CadastrarCategoria.css"
import { AuthContext } from "../../../contexts/AuthContext";

function CadastrarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { usuario } = useContext(AuthContext)

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!categoria.descricao?.trim()) {
            ToastAlerta("Preencha a descrição da categoria!", "info");
            return;
        }

        setIsLoading(true);

        try {
            await cadastrar(`/categorias`, categoria, setCategoria, {
                headers: {
                    Authorization: usuario.token,
                },
            });
            ToastAlerta("A categoria foi cadastrada com sucesso!", "sucesso");

            setTimeout(() => {
                retornar();
            }, 1500);
        } catch (error: any) {
            ToastAlerta("Erro ao cadastrar categoria.", "erro");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen bg-[#ffffff]">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-4xl font-bold text-[#FF4D38] mb-6 mt-10 text-Henter">
                    Cadastre uma categoria
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
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
                        className="text-white bg-[#FF4D38] flex items-center justify-center py-2 px-8 rounded-xl shadow-md mt-4 mx-auto min-w-[150px] mb-6 cursor-pointer hover:bg-[#e04430]"
                    >
                        {isLoading ? (
                            <ThreeDots
                                color="white"
                                width="20"
                                height="20"
                                visible={true}
                            />
                        ) : (
                            'Cadastrar'
                        )}
                    </button>



                </form>
            </div>

            <div className="w-1/2 hidden md:flex justify-center items-center  p-0">
                <img
                    src="https://ik.imagekit.io/willa/bob-bowie-l-y1LxPLYOY-unsplash.jpg?updatedAt=1745522160250"
                    alt="Cadastro do Produto"
                    className="w-full h-[105vh] object-cover object-bottom"
                />
            </div>
        </div>
    );
}

export default CadastrarCategoria;