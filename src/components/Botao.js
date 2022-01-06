import styled from "styled-components";

const Botao = styled.button`
    all: unset;
    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 4.63636px;

    font: normal 20.976px 'Lexend Deca';
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;

    cursor: pointer;

    ${props => !props.ativo && "pointer-events: none;"}
    ${props => !props.ativo && "opacity: 0.7;"}
`;

export default Botao;