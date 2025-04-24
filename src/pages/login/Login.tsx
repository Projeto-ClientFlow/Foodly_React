import './Login.css';

function Login() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-[#FFF5F3] font-sans">
        {/* Lado da imagem */}
        <div className="hidden lg:flex items-center justify-center bg-gray-300 w-full h-full">
          <p className="text-5xl text-black">Foto</p>
        </div>

        {/* Formulário de login */}
        <form className="flex justify-center items-center flex-col w-2/3 gap-4">
          <h2 className="text-[#FF4D38] text-4xl font-bold mb-4">Entrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#FF4D38] font-semibold">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#FF4D38] font-semibold">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF4D38] text-white font-semibold px-8 py-2 rounded hover:bg-[#e04430] mt-2"
          >
            Entrar
          </button>

          <p className="text-sm text-[#666666] mt-4">
            Ainda não tem uma conta?{' '}
            <a href="#" className="text-[#FF4D38] font-semibold hover:underline">Cadastre-se</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
