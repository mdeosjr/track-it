import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import ContextoPorcentagem from '../contexts/ContextoPorcentagem';
import ContextoToken from '../contexts/ContextoToken';

function Menu() {
    const { porcentagem, setPorcentagemLocal } = useContext(ContextoPorcentagem);
    const { token } = useContext(ContextoToken);
    
    useEffect(() => {
        const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', 
        {
            headers: {
            Authorization: `Bearer ${token}`
            }
        });
        
        promessa.then(resposta => {
            setPorcentagemLocal(((resposta.data.filter(habito => habito.done).length)/(resposta.data.length))*100)}
            )
    }, [porcentagem])

    return (
        <BarraMenu>
            <StyledLink to="/habitos">Hábitos</StyledLink>
            <Circulo to="/hoje">
                <CircularProgressbar 
                    value={porcentagem} 
                    text={"Hoje"} 
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: '#52B6FF',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        pathColor: '#FFFFFF'
                    })}
                />
            </Circulo>
            <StyledLink to="/historico">Histórico</StyledLink>
        </BarraMenu>
    )    
}

const BarraMenu = styled.div`
    width: 375px;
    height: 70px;
    padding: 0 18px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font: normal 17.976px 'Lexend Deca';
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