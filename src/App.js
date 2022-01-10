import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LoginPagina from "./components/Login"
import CadastroPagina from "./components/Cadastro"
import HojePagina from "./components/Hoje"
import HistoricoPagina from "./components/Historico"
import HabitosPagina from "./components/Habitos"
import ContextoUsuario from "./contexts/ContextoUsuario"
import ContextoToken from './contexts/ContextoToken'
import ContextoPorcentagem from './contexts/ContextoPorcentagem'

export default function App() {
    const tokenLocal = (localStorage.getItem('token'))
    const imagemUsuarioLocal = (localStorage.getItem('imagem'))
    const porcentagemLocal = (localStorage.getItem('porcentagem'))
    const [imagemUsuario, setImagemUsuario] = useState(imagemUsuarioLocal)
    const [token, setToken] = useState(tokenLocal)
    const [porcentagem, setPorcentagem] = useState(porcentagemLocal)
    
    function setTokenLocal(token){
        setToken(token)
        localStorage.setItem('token', token)
    }

    function setImagemUsuarioLocal(imagem){
        setImagemUsuario(imagem)
        localStorage.setItem('imagem', imagem)
    }

    function setPorcentagemLocal(progresso){
        setPorcentagem(progresso)
        localStorage.setItem('progresso', progresso)
    }

    return (
        <ContextoUsuario.Provider value={{imagemUsuario, setImagemUsuarioLocal}}>
            <BrowserRouter>
                <ContextoToken.Provider value={{token, setTokenLocal}}>
                    <ContextoPorcentagem.Provider value={{porcentagem, setPorcentagemLocal}}>
                        <Routes>
                            <Route path="/" element={<LoginPagina/>}/>
                            <Route path="/cadastro" element={<CadastroPagina/>}/>
                            <Route path="/hoje" element={<HojePagina/>}/>
                            <Route path="/historico" element={<HistoricoPagina/>}/>
                            <Route path="/habitos" element={<HabitosPagina/>}/>
                        </Routes>
                    </ContextoPorcentagem.Provider>
                </ContextoToken.Provider>
            </BrowserRouter>
        </ContextoUsuario.Provider>
    )
}

