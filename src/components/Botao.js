import styled from "styled-components";

const Botao = styled.button`
    all: unset;
    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;

    cursor: pointer;

    ${props => !props.ativo && "pointer-events: none;"}
    ${props => !props.ativo && "opacity: 0.7;"}
`;

export default Botao;