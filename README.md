<div align='center' id='topo'/>

# Projeto Foodly
## Sistema de Delivery de Alimentos

Clique e acesse a demo do Foodly no Youtube!

[![Assista à demo do ClientFlow!](https://ik.imagekit.io/willa/Design%20sem%20nome%20(5).png?updatedAt=1746213311039)](https://youtu.be/u6SN97x-9gQ)


</div>

O **Foodly** é um sistema de delivery desenvolvido com foco em agilidade e experiência do usuário. A aplicação possui uma interface moderna construída com **React**, **Tailwind CSS** e **TypeScript** no front-end, integrada a uma API robusta desenvolvida em **Java** com **Spring Boot** no back-end.

> **Confira a aplicação em funcionamento pode ser acessada por meio do seguinte link:** [Site Foodly](https://foodly-react-five.vercel.app/)

> **Já o back-end deste projeto pode ser encontrado no seguinte link:** [Foodly](https://github.com/Projeto-ClientFlow/Foodly)

******

<div align='center'/>

  ![React](https://a11ybadges.com/badge?logo=react)
  ![Tailwind](https://a11ybadges.com/badge?logo=tailwindcss)
  ![Vite](https://a11ybadges.com/badge?logo=vite)
  ![TypeScript](https://a11ybadges.com/badge?logo=typescript)
  ![JavaScript](https://a11ybadges.com/badge?logo=javascript)
  ![HTML](https://a11ybadges.com/badge?logo=html5)
  ![CSS](https://a11ybadges.com/badge?logo=css3)
  ![Vercel](https://a11ybadges.com/badge?logo=vercel)

</div>

******

## 📖 Tabela de Conteúdo
- [💡 Conhecimentos Mobilizados](#conhecimentosMobilizados)
- [🏗️ Estrutura do Projeto](#estruturaDoProjeto)
- [📂 Código Desenvolvido](#codigoDesenvolvido)
- [🛠️ Tecnologias Utilizadas](#tecnologiasUtilizadas)
- [🤝 Desenvolvedoras do Projeto](#devas)

---

<div id='conhecimentosMobilizados'/> 

## 💡 Conhecimentos Mobilizados

- **Axios**: Consumo de APIs REST de forma eficiente, com tratamento de respostas assíncronas.
- **React**: Criação de componentes reutilizáveis e responsivos para a construção da interface.
- **Tailwind CSS**: Estilização da aplicação com classes utilitárias, garantindo agilidade e responsividade.
- **TypeScript**: Aplicação da tipagem estática para maior segurança, legibilidade e escalabilidade do código.
- **Vite**: Ferramenta de build para aplicações React, proporcionando um ambiente de desenvolvimento ágil.
- **Componentização**: Separação de responsabilidades com componentes reutilizáveis e de fácil manutenção.
- **Vercel**: Plataforma utilizada para o deploy da aplicação, permitindo acesso rápido e gratuito à versão em produção.
- **React Router DOM**: Gerenciamento de rotas de maneira declarativa, permitindo navegação fluida entre páginas da aplicação.

---

<div id='estruturaDoProjeto'/> 

## 🏗️ Estrutura do Projeto

```
foodly/
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   └── react.svg
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── barradepesquisa/
│   │   │   └── BarraDePesquisa.tsx
│   │   ├── categories/
│   │   │   ├── atualizarcategoria/
│   │   │   │   ├── AtualizarCategoria.tsx
│   │   │   │   └── AtualizarCategoria.css
│   │   │   ├── cadastrarcategoria/
│   │   │   │   ├── CadastrarCategoria.tsx
│   │   │   │   └── CadastrarCategoria.css
│   │   │   ├── cardcategoria/
│   │   │   │   └── CardCategoria.tsx
│   │   │   ├── deletarcategoria/
│   │   │   │   └── DeletarCategoria.tsx
│   │   │   └── listacategoria/
│   │   │       └── ListaCategoria.tsx
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── paginanaoencontrada/
│   │   │   └── NaoEncontrado.tsx
│   │   └── produtos/
│   │       ├── atualizarproduto/
│   │       │   ├── AtualizarProduto.tsx
│   │       │   └── AtualizarProduto.css
│   │       ├── cadastrarproduto/
│   │       │   ├── CadastrarProduto.tsx
│   │       │   └── CadastrarProduto.css
│   │       ├── cardproduto/
│   │       │   └── CardProduto.tsx
│   │       ├── deletarproduto/
│   │       │   └── DeletarProduto.tsx
│   │       ├── listaprodutos/
│   │       │   └── ListaProdutos.tsx
│   │       └── modalproduto/
│   │           ├── ModalProduto.tsx
│   │           └── ModalProduto.css
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── models/
│   │   ├── Card.ts
│   │   ├── Categoria.ts
│   │   ├── Produto.ts
│   │   ├── Usuario.ts
│   │   └── UsuarioLogin.ts
│   ├── pages/
│   │   ├── cadastro/
│   │   │   ├── Cadastro.tsx
│   │   │   └── Cadastro.css
│   │   ├── home/
│   │   │   └── Home.tsx
│   │   ├── login/
│   │   │   ├── Login.tsx
│   │   │   └── Login.css
│   │   ├── perfil/
│   │   │   ├── atualizarperfil/
│   │   │   │   └── AtualizarPerfil.tsx
│   │   │   ├── deletarperfil/
│   │   │   │   └── DeletarPerfil.tsx
│   │   │   └── Perfil.tsx
│   │   └── sobre_nos/
│   │       └── SobreNos.tsx
│   ├── services/
│   │   └── Service.ts
│   ├── utils/
│   │   └── ToastAlerta.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

<div id='codigoDesenvolvido'/>

## 📂 Código Desenvolvido

- **`App.tsx`**: Componente raiz da aplicação, responsável por definir as rotas e renderizar os principais elementos de interface.
- **`main.tsx`**: Ponto de entrada da aplicação, onde o React é inicializado e o componente App é injetado no DOM.
- **`index.css`** e **`App.css`**: Arquivos de estilização global da aplicação, com configurações personalizadas e utilitários baseados em Tailwind CSS.
- **`vite.config.ts`**: Configuração do Vite como bundler, otimizando a performance e o ambiente de desenvolvimento.
- **`Navbar.tsx`** e **`Footer.tsx`**: Componentes fixos e reutilizáveis de cabeçalho e rodapé, presentes em todas as páginas da aplicação.
- **`BarraDePesquisa.tsx`**: Componente funcional de busca, que melhora a usabilidade permitindo ao usuário encontrar produtos com mais agilidade.
- **`CardCategoria.tsx`**, **`CadastrarCategoria.tsx`**, **`AtualizarCategoria.tsx`**, **`DeletarCategoria.tsx`**, **`ListaCategoria.tsx`**: Conjunto de componentes responsáveis pelas operações de CRUD de categorias, implementando boas práticas de modularidade.
- **`CardProduto.tsx`**, **`CadastrarProduto.tsx`**, **`AtualizarProduto.tsx`**, **`DeletarProduto.tsx`**, **`ListaProdutos.tsx`**, **`ModalProduto.tsx`**: Componentes voltados ao gerenciamento de produtos, com foco em interatividade, reatividade e responsividade.
- **`Home.tsx`**: Página inicial com destaque para os produtos e categorias.
- **`Login.tsx`** e **`Cadastro.tsx`**: Telas de autenticação e registro de usuários.
- **`Perfil.tsx`**, **`AtualizarPerfil.tsx`**, **`DeletarPerfil.tsx`**: Funcionalidades relacionadas à visualização e gerenciamento do perfil do usuário.
- **`SobreNos.tsx`**: Página institucional com informações sobre o projeto.
- **`NaoEncontrado.tsx`**: Página de erro 404 personalizada.
- **`AuthContext.tsx`**: Contexto global para gerenciamento de autenticação e estado do usuário, utilizando a Context API do React.
- **`ToastAlerta.ts`**: Função utilitária para exibir mensagens de alerta e feedback ao usuário utilizando notificações.
- **`Categoria.ts, **`Produto.ts`**, **`Usuario.ts`**, **`UsuarioLogin.ts`**, **`Card.ts`**: Interfaces TypeScript que representam as entidades da aplicação, garantindo tipagem estática e segurança durante o desenvolvimento.
- **`Service.ts`**: Centralização das requisições HTTP feitas com Axios, promovendo reaproveitamento de código e melhor organização das chamadas à API.

---

<div id='tecnologiasUtilizadas'/> 

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: JavaScript (ES6+) e TypeScript
- **Framework**: React
- **Roteamento**: React Router DOM
- **Estilização**: Tailwind CSS
- **Ferramenta de Build**: Vite
- **Gerenciador de Pacotes**: npx
- **Consumo de API**: Axios
- **Hospedagem**: Vercel
  
---

<div id='devas'/> 
  
## 🤝 Desenvolvedoras do Projeto

Este projeto foi possível graças às contribuições das seguintes desenvolvedoras:

<div align="center">
  <table>
    <td align="center">
        <a href="https://www.linkedin.com/in/elianempontes/" title="Linkedin da Eliane Medeiros">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGppzwuto4Skw/profile-displayphoto-shrink_400_400/B4DZOzMU5sHUAg-/0/1733878173890?e=1747267200&v=beta&t=dYk2XBvZ6Be-J99J4sp9kljf2TF3ZZ5YZ8lEu72U7oA" width="100px;" alt="Foto da Eliane Medeiros"/><br>
          <sub>
            <b>Eliane Medeiros</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://www.linkedin.com/in/larissa-mata-a32a5a104/" title="Linkedin da Larissa Mata">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQH8ZGW05SThzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698075416577?e=1747267200&v=beta&t=MZQra9MZhtWWZqrZx6Re7loE6-KZIhHj9kj5Rbxe_Ds" width="100px;" alt="Foto da Larissa Mata"/><br>
          <sub>
            <b>Larissa Mata</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/MariPimentelCarmo" title="GitHub da Mariana Carmo">
          <img src="https://avatars.githubusercontent.com/u/99743029?v=4" width="100px;" alt="Foto da Mariana Carmo"/><br>
          <sub>
            <b>Mariana Carmo</b>
          </sub>
        </a>
      </td>
    <td align="center">
        <a href="https://github.com/willaevangelista" title="GitHub da Willa Evangelista">
          <img src="https://avatars.githubusercontent.com/u/84138876?v=4" width="100px;" alt="Foto da Willa Evangelista"/><br>
          <sub>
            <b>Willa Evangelista</b>
          </sub>
        </a>
      </td>
  </table>
</div>

<div align='right'>
  
  [Voltar ao topo ⬆️](#topo)

</div>
