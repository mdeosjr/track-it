import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LoginPagina from "./components/Login"
import CadastroPagina from "./components/Cadastro"
import HojePagina from "./components/Hoje"
import HistoricoPagina from "./components/Historico"
import HabitosPagina from "./components/Habitos"
import ContextoUsuario from "./contexts/ContextoUsuario";
import ContextoToken from './contexts/ContextoToken'
import ContextoPorcentagem from './contexts/ContextoPorcentagem'

export default function App() {
    const [usuario, setUsuario] = useState('');
    const [token, setToken] = useState('');
    const [porcentagem, setPorcentagem] = useState('');

    return (
        <ContextoUsuario.Provider value={{usuario, setUsuario}}>
            <BrowserRouter>
                <ContextoToken.Provider value={{token, setToken}}>
                    <ContextoPorcentagem.Provider value={{porcentagem, setPorcentagem}}>
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

