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
                 <p className="text-2xl bg-white font-bold text-[#FF4D38] text-center p-6">
                    {produto.nomeProduto}
                </p>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold"> Descrição: </span>
                    <span>
                    {produto.descricaoProduto}
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold"> Preço: </span>
                    <span>
                    R$ {produto.precoProduto}
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
                    className="w-full border border-[#FF4D38] text-[#FF4D38] bg-[rgba(255,77,56,0.04)] flex items-center justify-center py-2 rounded-xl font-semibold"
                    >
                    Saiba Mais
                </button>
                    <Link
                        to={`/atualizarproduto/${produto.id}`}
                        className="w-full text-white bg-[rgb(255,77,56)] flex items-center justify-center py-2 rounded-xl font-semibold"
                    >
                        Atualizar
                    </Link> 
                </div>
            </div>
        </div>
        {/* Modal */}
        {modalAberto && (
                <div className="fixed inset-0 bg-[rgba(255,77,56,0.08)] flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-lg relative">

                        {/* Botão de fechar (X) */}
                        <button
                            onClick={() => setModalAberto(false)}
                            className="absolute top-4 right-4 text-4xl text-[#FF4D38] hover:text-[#FF1D16] focus:outline-none"
                        >
                            ×
                        </button>
                    
                        <h2 className="text-2xl font-bold mb-4 text-[#FF4D38] text-center">{produto.nomeProduto}</h2>
                        <p className="text-[#85868f]"><strong>Descrição:</strong> {produto.descricaoProduto}</p>
                        <p className="text-[#85868f]"><strong>Preço: R$</strong> {produto.precoProduto}</p>
                        <p className="text-[#85868f]"><strong>Tamanho da Porção:</strong> {produto.tamanhoPorcao} gramas</p>
                        <p className="text-[#85868f]"><strong>Categoria:</strong> {produto.categoria?.descricao}</p>
                        <div className="flex space-x-4">
                            <Link 
                                to="/atualizarproduto"
                                onClick={() => setModalAberto(false)}
                                className="mt-4 w-full text-white bg-[#FF4D38] py-2 rounded-xl font-semibold text-center block"
                                >
                                Atualizar
                            </Link>
                            <Link 
                                to="/deletarproduto"
                                onClick={() => setModalAberto(false)}
                                className="mt-4 w-full text-white bg-[#000000] py-2 rounded-xl font-semibold text-center block"
                                >
                                Deletar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>      
    );
}

export default CardProduto;