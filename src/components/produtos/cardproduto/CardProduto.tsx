import { useState } from "react";
import { Link } from "react-router-dom";

function CardProduto({ produto }) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between p-2">
        
        {/* FUNCIONALIDADE */}
        <div className="flex flex-col items-center justify-center h-full p-2 mt-4">
          {produto.precoProduto > 100 ? (
            <img 
              src="https://ik.imagekit.io/willa/desconto.png?updatedAt=1745526735577" 
              alt="Ícone de Desconto" 
              className="w-10 h-10"
            />
          ) : (
            <img 
              src="https://ik.imagekit.io/willa/desconto%20(1).png?updatedAt=1745526735577" 
              alt="Ícone padrão - sem desconto" 
              className="w-10 h-10 opacity-60"
            />
          )}
        </div>

        <div className="flex flex-col justify-center h-full p-2">
          {/* Nome do produto centralizado */}
          <div className="flex justify-center w-full mt-4">
            <p className="text-2xl bg-white font-bold text-[#FF4D38] text-center max-w-[300px] break-words">
                {produto.nomeProduto}
            </p>
        </div>
          
          <div className="flex justify-center w-full py-4 items-center">
            <img
                src={produto.foto || 'https://ik.imagekit.io/willa/6061bd47-2818-4f2b-b04a-5a9ddb6f6467.png?updatedAt=1745586625445'}
                alt={`Foto do produto ${produto.nomeProduto}`}
                className="w-120 h-40 object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex justify-center w-full text-1xl bg-white text-[#858690]">
            <span className="font-bold">Preço:&nbsp;</span>
            <span>R$ {produto.precoProduto}</span>
          </div>

        </div>

        <div className="flex flex-col">
          <div className="flex space-x-4 p-4">
            <button
              onClick={() => setModalAberto(true)}
              className="w-full border border-[#FF4D38] text-[#FF4D38]  hover:border-[#d6523d] hover:cursor-zoom-in bg-[rgba(255,77,56,0.04)] flex items-center justify-center py-2 rounded-xl font-semibold hover:bg-[rgba(255,77,56,0.30)]"
            >
              Saiba Mais
            </button>
            <Link
              to={`/atualizar-produto/${produto.id}`}
              className="w-full text-white bg-[rgb(255,77,56)] hover:bg-[#d6523d] flex items-center justify-center py-2 rounded-xl font-semibold"
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
              className="absolute top-2 right-4 text-4xl text-[#FF4D38] hover:text-[#FF1D16] focus:outline-none"
            >
              ×
            </button>
            {/* FUNCIONALIDADE */}
            <div className="absolute top-4 left-4">
            {produto.precoProduto > 100 ? (
                <img 
                src="https://ik.imagekit.io/willa/desconto.png?updatedAt=1745526735577" 
                alt="Ícone de Desconto" 
                className="w-10 h-10"
                />
            ) : (
                <img 
                src="https://ik.imagekit.io/willa/desconto%20(1).png?updatedAt=1745526735577" 
                alt="Ícone padrão - sem desconto" 
                className="w-10 h-10 opacity-50"
                />
            )}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#FF4D38] text-center">{produto.nomeProduto}</h2>
            <div className="flex justify-center w-full py-4 items-center">
            <img
                src={produto.foto || 'https://ik.imagekit.io/willa/6061bd47-2818-4f2b-b04a-5a9ddb6f6467.png?updatedAt=1745586625445'}
                alt={`Foto do produto ${produto.nomeProduto}`}
                className="w-120 h-40 object-cover rounded-xl shadow-md"
            />
            </div>
            <p className="text-[#85868f]"><strong>Descrição:</strong> {produto.descricaoProduto}</p>
            <p className="text-[#85868f]"><span className="font-bold">Preço:&nbsp;</span>
            <span>R$ {produto.precoProduto}</span></p>
            <p className="text-[#85868f]"><strong>Tamanho da Porção:</strong> {produto.tamanhoPorcao} gramas</p>
            <p className="text-[#85868f]"><strong>Categoria:</strong> {produto.categoria?.descricao}</p>

            <div className="flex space-x-4">
              <Link 
                to={`/atualizar-produto/${produto.id}`}
                onClick={() => setModalAberto(false)}
                className="mt-4 w-full text-white bg-[#FF4D38] hover:bg-[#d6523d] py-2 rounded-xl font-semibold text-center block"
              >
                Atualizar
              </Link>
              <Link 
                to={`/deletar-produto/${produto.id}`}
                onClick={() => setModalAberto(false)}
                className="mt-4 w-full text-white bg-gray-600 hover:bg-gray-800 py-2 rounded-xl font-semibold text-center block"
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