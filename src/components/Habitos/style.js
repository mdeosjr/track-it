import styled from 'styled-components';

const CaixaTitulo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AdicionarHabito = styled.button`
    all: unset;

    width: 40px;
    height: 35px;
    margin-top: 92px;

    display: flex;
    justify-content: center;

    background: #52B6FF;
    border-radius: 4.63636px;

    font: normal 26.976px 'Lexend Deca';
    line-height: 34px;

    color: #FFFFFF;

    cursor: pointer;
`;

const Semana = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 4px;
`;

const Dia = styled.button`
    width: 30px;
    height: 30px;

    background: ${props => props.selecionado ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font: normal 19.976px 'Lexend Deca';
    line-height: 25px;
  
    color: ${props => props.selecionado ? '#FFFFFF' : '#DBDBDB'};

    cursor: pointer;
`;

const Botoes = styled.div`
    margin-top: 29px;

    display: flex;
    justify-content: flex-end;
    gap: 16px;
`

const Cancelar = styled.button`
    all: unset;
    width: 84px;
    height: 35px;

    background: #FFFFFF;

    font: normal 15.976px 'Lexend Deca';
    line-height: 20px;
    text-align: center;
    color: #52B6FF;

    cursor: pointer;
`;

const Salvar = styled.button`
    all: unset;
    width: 84px;
    height: 35px;
    border-radius: 4.63636px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #52B6FF;

    font: normal 15.976px 'Lexend Deca';
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`;

export {
    CaixaTitulo,
    AdicionarHabito,
    Semana,
    Dia,
    Botoes,
    Cancelar, 
    Salvar
}