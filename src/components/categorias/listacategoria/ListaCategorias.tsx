import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Search } from "lucide-react";
import CardCategorias from "../cardcategoria/CardCategorias";
import { listar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";


function ListaCategorias() {

    const navigate = useNavigate();
    const [categoria, setCategorias] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [busca, setBusca] = useState<string>(""); 
    const [categoriaFiltrada, setCategoriaFiltrada] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const listarCategorias = async () => {
        setIsLoading(true);
        try {
            await listar("/categorias", setCategorias, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            } else {
                console.error("Erro ao listar categorias", error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
          listarCategorias();
          setIsLoading(false);
        }, 800); 
      }, []);

      const filtrarCategoria = () => {
        const categoriaFiltrada = categoria.filter((categoria) =>
            categoria.descricao.toLowerCase().includes(busca.toLowerCase())
        );
        setCategoriaFiltrada(categoriaFiltrada);
    };

    useEffect(() => {
        setCategoriaFiltrada(categoria);
    }, [categoria]);

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#FF4D38"  
                    ariaLabel="three-dots-loading"
                    visible={true}
                />
            </div>
            ) : (
                <div className="flex w-auto pt-[100px] min-h-screen">
                    <div className="flex-1 px-8">
                        {/* Título centralizado */}
                        <h1 className="text-3xl font-bold text-[#FF4D38] mb-6 text-center">
                            Filtre suas Categorias
                        </h1>

                        {/* Barra de pesquisa e botão */}
                        <div className="flex space-x-4 items-center mb-10 max-w-xl mx-auto w-full">
                            {/* Barra de pesquisa do lado esquerdo */}
                            <div className="relative w-full">
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    placeholder="Filtre sua busca"
                                    className="w-full bg-[#FFEEEC] pl-10 pr-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
                                    value={busca}
                                    onChange={(e) => setBusca(e.target.value)}
                                />
                            </div>

                            {/* Botão de buscar */}
                            <button
                                className="text-white bg-[#FF4D38] flex items-center justify-center py-3 px-6 rounded-xl shadow-md cursor-pointer"
                                onClick={filtrarCategoria}
                            >
                                <span className="font-semibold">Buscar</span>
                            </button>
                        </div>

                        {/* Lista de cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 pb-4">
                            {categoriaFiltrada.map((categoria) => (
                                <CardCategorias
                                    key={categoria.id}
                                    categoria={categoria}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListaCategorias;