import React from 'react';
import styled from 'styled-components';
import Topo from '../Topo';
import Menu from '../Menu';

function HojePagina() {
  return (
    <Container>
        <Topo/>
        <Menu/>
    </Container>
  )
}

const Container = styled.div`
    background-color: #F2F2F2;
    width: 375px;
    height: 100vh;
`

export default HojePagina;