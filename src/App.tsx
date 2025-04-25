import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SobreNos from './components/sobre_nos/SobreNos'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Perfil from './pages/perfil/Perfil'
import EditarPerfil from './pages/perfil/atualizarperfil/AtualizarPerfil'
import DeletarPerfil from './pages/perfil/deletarperfil/DeletarPerfil'




function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/editar-perfil/:id" element={<EditarPerfil />} />
              <Route path="/deletar-perfil" element={<DeletarPerfil />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App