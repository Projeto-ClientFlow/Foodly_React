import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { ThreeDots } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';

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
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
      }
      setIsLoading(false);
    } else {
      ToastAlerta('Dados do usuário inconsistentes! Verifique as informações do cadastro.', 'aviso');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }
  }

  return (
    <div className="flex pt-0 min-h-screen bg-[#FFFFFF]">
       <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-12">
      
        <form onSubmit={cadastrarNovoUsuario} className="flex flex-col w-3/4 gap-4">
          <h2 className="text-[#FF4D38] text-4xl font-bold text-center mb-4">Crie sua conta</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#FF4D38] font-semibold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome da sua empresa"
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
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
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
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
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
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
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
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
              className="w-full bg-[#FFEEEC] pl-4 pr-4 py-3 rounded-xl border border-[#FF4D38]/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D38]"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF4D38] text-white font-semibold text-1xl px-12 py-3 rounded-xl border border-[#FF4D38]/50 hover:bg-[#e04430] mt-4 mx-auto flex justify-center"
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
          src="https://ik.imagekit.io/willa/pexels-adonyi-foto-2064359.jpg?updatedAt=1745500406158"
          alt="Cadastro do usuário"
          className="w-full h-[120vh] object-cover object-bottom"
        />
      </div>
    </div>
  );
}

export default Cadastro;