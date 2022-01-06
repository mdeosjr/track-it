import React from 'react';
import Topo from '../Topo';
import Menu from '../Menu';
import Titulo from '../Titulo'
import TextoGeral from '../TextoGeral'
import Container from '../Container';

function HistoricoPagina() {
    return (
        <Container>
            <Topo/>
            <Titulo>Histórico</Titulo>
            <TextoGeral>Em breve você poderá ver o histórico dos seus hábitos aqui!</TextoGeral>
            <Menu/>
        </Container>
    )
}

export default HistoricoPagina;