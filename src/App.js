import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPagina from "./components/Login"
import CadastroPagina from "./components/Cadastro"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPagina/>}/>
                <Route path="/cadastro" element={<CadastroPagina/>}/>
            </Routes>
        </BrowserRouter>
    )
}

