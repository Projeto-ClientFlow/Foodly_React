// src/pages/NaoEncontrado.tsx
function NaoEncontrado() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-[#FF4D38] text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Ops! Página não encontrada.</p>
        <a
          href="/"
          className="bg-[#FF4D38] text-white px-6 py-2 rounded-lg hover:bg-[#912C20] transition-colors"
        >
          Voltar para a Home
        </a>
      </div>
    );
  }
  
  export default NaoEncontrado;
  
  
  
  
  
  
  
  
  
  
  