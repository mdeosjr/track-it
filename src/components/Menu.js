import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

function Menu() {
    const percentage = 66;

    return (
        <Container>
            <StyledLink to="/habitos">Hábitos</StyledLink>
            <Circulo to="/hoje">
                <CircularProgressbar 
                    value={percentage} 
                    text={"Hoje"} 
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: '#52B6FF',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        pathColor: '#FFFFFF'
                    }
                    )}
                />
            </Circulo>
            <StyledLink to="/historico">Histórico</StyledLink>
        </Container>
    )    
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    padding: 0 18px;

    position: fixed;
    left: 0px;
    bottom: 0px;

    background-color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    text-decoration: none;

    color: #52B6FF;
`;

const Circulo = styled(Link)`
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
`

export default Menu;