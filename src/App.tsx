import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import ListarProdutos from './components/produtos/listaprodutos/ListaProdutos'
import SobreNos from './components/sobre_nos/SobreNos'
import CadastrarProduto from './components/produtos/cadastrarproduto/CadastrarProduto'
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto'
import AtualizarProduto from './components/produtos/atualizarproduto/AtualizarProduto'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/cadastrarproduto" element={<CadastrarProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/atualizarproduto/:id" element={<AtualizarProduto />} />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
