import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { RotatingLines } from 'react-loader-spinner';

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const [usuario, setUsuario] = useState<Usuario>({
    id: null,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuario.id !== 0 && usuario.id !== null) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert('Usuário cadastrado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar o usuário!');
      }
      setIsLoading(false);
    } else {
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-[#FFFFFF] font-sans">
      
      {/* Formulário - agora do lado esquerdo */}
      <div className="flex justify-center items-center h-full">
        <form onSubmit={cadastrarNovoUsuario} className="flex flex-col w-3/4 gap-4">
          <h2 className="text-[#FF4D38] text-4xl font-bold mb-4">Crie sua conta</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#FF4D38] font-semibold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome da sua empresa"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#FF4D38] font-semibold">E-mail</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu e-mail"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#FF4D38] font-semibold">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Informe o link da foto da sua empresa"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={usuario.foto}
              onChange={atualizarEstado}
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
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-[#FF4D38] font-semibold">Confirme a sua senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Digite sua senha novamente"
              className="border border-[#FF4D38] bg-[#FFF5F3] rounded px-4 py-2 placeholder-[#666666]"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF4D38] text-white font-semibold px-8 py-2 rounded hover:bg-[#e04430] mt-2 w-full flex justify-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              'Cadastrar'
            )}
          </button>
        </form>
      </div>

      {/* Imagem - agora do lado direito */}
      <div className="hidden lg:flex justify-center items-center h-full">
        <img
          src="https://ik.imagekit.io/willa/pexels-adonyi-foto-2064359.jpg?updatedAt=1745500406158"
          alt="Cadastro do usuário"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Cadastro;