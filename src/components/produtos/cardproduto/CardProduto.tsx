import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useState } from 'react';

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps ) {

    const [modalAberto, setModalAberto] = useState(false);

    return (

        <>
            <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between p-2">
             <div className="flex flex-col items-center justify-center h-full p-2">
                <div className="mt-4">
                    {/* FUNCIONALIDADE */}
                    {/* {produto.valorContrato > 10000 ? (
                    <img src="https://ik.imagekit.io/willa/coroa.png?updatedAt=1745427272458" alt="Coroa" className="w-10 h-10" />
                    ) : (
                    <img src="https://ik.imagekit.io/willa/simbolo-de-diamante%20(1).png?updatedAt=1745427272315" alt="Ícone padrão" className="w-10 h-10" />
                    )} */}
                </div>
                 <p className="text-2xl bg-white font-bold text-[#FF8000] text-center p-6">
                    {produto.nome}
                </p>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold"> Descrição: </span>
                    <span>
                    {produto.descricao}
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold"> Preço: </span>
                    <span>
                    R$ {produto.preco}
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold">Tamanho da Porção: </span>
                    <span>
                    {produto.tamanhoPorcao} gramas
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold">Categoria: </span>
                    <span>
                    {produto.categoria?.descricao}
                    </span>
                </div>
            </div>
            <div className="flex flex-col 1-col">
                <div className="flex space-x-4 p-4">
                    <button
                            onClick={() => setModalAberto(true)}
                            className="w-full text-white bg-[#f29d4b] flex items-center justify-center py-2 rounded-xl font-semibold"
                        >
                        Saiba Mais
                    </button>
                    <Link
                        to={`/atualizarproduto/${produto.id}`}
                        className="w-full text-white bg-[#8C8E98] flex items-center justify-center py-2 rounded-xl font-semibold"
                    >
                        Atualizar
                    </Link> 
                </div>
            </div>
        </div>
        {/* Modal */}
        {modalAberto && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-[#FF8000]">{produto.nome}</h2>
                        <p><strong>Descrição:</strong> {produto.descricao}</p>
                        <p><strong>Preço:</strong> R$ {produto.preco}</p>
                        <p><strong>Tamanho da Porção:</strong> {produto.tamanhoPorcao} gramas</p>
                        <p><strong>Categoria:</strong> {produto.categoria?.descricao}</p>
                        <button
                            onClick={() => setModalAberto(false)}
                            className="mt-4 w-full text-white bg-[#8C8E98] py-2 rounded-xl font-semibold"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>      
    );
}

export default CardProduto;