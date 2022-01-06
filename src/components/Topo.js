import styled from 'styled-components';
import logomini from '../assets/logomini.svg'

function Topo() {
    return (
        <Container>
            <img src={logomini} alt="logo"></img>
            <img src={logomini} alt="logo"></img>
        </Container>
    )    
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    padding: 0 18px;

    position: fixed;
    left: 0px;
    top: 0px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 97px;
        height: 49px;
    }
`

export default Topo;