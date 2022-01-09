import { useContext } from 'react';
import Topo from '../Topo';
import Menu from '../Menu';
import { Titulo } from '../Titulo'
import TextoGeral from '../TextoGeral'
import Container from '../Container';
import ContextoPorcentagem from '../../contexts/ContextoPorcentagem'

function HistoricoPagina() {
    const { porcentagem } = useContext(ContextoPorcentagem)

    return (
        <Container>
            <Topo/>
            <Titulo>Histórico</Titulo>
            <TextoGeral>Em breve você poderá ver o histórico dos seus hábitos aqui!</TextoGeral>
            <Menu porcentagem={porcentagem}/>
        </Container>
    )
}

export default HistoricoPagina;