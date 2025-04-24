import React from "react";

const cards = [
  { label: "Tacos", img: "https://ik.imagekit.io/willa/pexels-pixabay-461198.jpg?updatedAt=1745503482590" },
  { label: "Sushi", img: "https://ik.imagekit.io/willa/pexels-photo-1683545.webp?updatedAt=1745503482590" },
  { label: "Doces", img: "https://ik.imagekit.io/willa/pexels-cottonbro-4686958.jpg?updatedAt=1745503482590" },
  { label: "Lanches", img: "https://ik.imagekit.io/willa/pexels-ufukiseloglu-29481861.jpg?updatedAt=1745503482590" },
  { label: "Pizzas", img: "https://ik.imagekit.io/willa/pexels-photo-367915.webp?updatedAt=1745503482590" },
  { label: "Bebidas", img: "https://ik.imagekit.io/willa/pexels-kindelmedia-8215136.jpg?updatedAt=1745503482590" },
  { label: "Massas", img: "https://ik.imagekit.io/willa/pexels-cottonbro-4057736.jpg?updatedAt=1745503482590" },
  { label: "Saladas", img: "https://ik.imagekit.io/willa/pexels-julieaagaard-2097090.jpg?updatedAt=1745503482590" },
];

function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden">
        <img
          src="https://ik.imagekit.io/willa/Novo%20Projeto%20(1)%20(1).jpg?updatedAt=1745503482590"
          alt="Imagem da Página Home"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#FF4D38] drop-shadow-md">
            Mate sua fome com Foodly!
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-[#8C8E98] mb-1 drop-shadow-md">
            Na compra de produtos acima de R$100
          </p>
          <p className="text-md sm:text-lg md:text-xl font-bold text-[#8C8E98] drop-shadow-md">
            Ganhe 10% de desconto
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-10 text-[#FF4D38] drop-shadow-md text-center">
            Tudo o que você deseja, bem aqui!
          </h2>

        {/* Cards de comida */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group h-48 flex items-center justify-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="absolute text-white text-lg font-bold bg-[#FF4D38] bg-opacity-50 px-4 py-2 rounded-lg">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;



