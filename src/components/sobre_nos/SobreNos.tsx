import { LinkedinLogo, GithubLogo, LinktreeLogo } from '@phosphor-icons/react';
import Card from "../../models/Card";

export default function SobreNos() {
  const pessoas: Card[] = [
    {
      nome: "Eliane Medeiros",
      foto: "https://avatars.githubusercontent.com/u/100229060?v=4",
      descricao: "Em transição de carreira, formada em ADS e QA em formação. Responsável pelo design e desenvolvimento da 'Navbar', 'Footer', página 'Sobre Nós' , 'Cadastro', 'Login' e pelo deploy do Back-End do site.",
      linkedin: "https://www.linkedin.com/in/elianempontes/",
      github: "https://github.com/ElianeMPontes",
    },
    {
      nome: "Larissa Mata",
      foto: "https://avatars.githubusercontent.com/u/84134580?v=4",
      descricao: "Responsável pelo desenvolvimento  das páginas voltadas à produtos (cadastar, atualizar, listar e deletar).",
      linkedin: "https://www.linkedin.com/in/larissa-mata/",
      github: "https://github.com/larissamata",
    },
    {
      nome: "Mariana Carmo",
      foto: "https://avatars.githubusercontent.com/u/99743029?v=4",
      descricao: "Responsável pelo desenvolvimento das páginas relacionadas a categorias (cadastar, atualizar, listar e deletar).",
      linkedin: "https://www.linkedin.com/in/mariana-pimentel-frontend/",
      github: "https://github.com/MariPimentelCarmo",
    },
    {
      nome: "Willa Evangelista",
      foto: "https://avatars.githubusercontent.com/u/84138876?v=4",
      descricao: "Em transição de carreira, com formação em Engenharia de Software. Responsável pelo desenvolvimento  das páginas voltadas à produtos (cadastar, atualizar, listar e deletar)', pela funcionalidade especial e pelo deploy do Front-End do site.",
      linkedin: "https://www.linkedin.com/in/willaevangelista/",
      github: "https://github.com/willaevangelista",
      linktree: "https://linktr.ee/willaevangelista",
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#FFF5F3] min-h-screen pt-[140px] font-sans">
      <h1 className="text-[#FF4D38] text-4xl font-bold text-center mb-10">Conheça a Equipe Desenvolvedora</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {pessoas.map((pessoa, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-[#FF4D38] text-2xl font-bold mb-3">{pessoa.nome}</h2>
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-[#666666] mb-4 whitespace-pre-line">{pessoa.descricao}</p>
            <div className="flex justify-center gap-4">
              <a
                href={pessoa.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4D38] hover:text-[#e04430] transition-colors duration-200"
              >
                <LinkedinLogo size={40} weight="bold" />
              </a>
              <a
                href={pessoa.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4D38] hover:text-[#e04430] transition-colors duration-200"
              >
                <GithubLogo size={40} weight="bold" />
              </a>
              {pessoa.linktree && (
                <a
                  href={pessoa.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4D38] hover:text-[#e04430] transition-colors duration-200"
                >
                  <LinktreeLogo size={40} weight="bold" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}