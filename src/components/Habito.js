import styled from 'styled-components';

const Habito = styled.div`
    margin-top: 20px;
    padding: 18px;

    background: #FFFFFF;
    border-radius: 5px;

    position: relative;

    h1 {
        font: normal 19.976px 'Lexend Deca';
        line-height: 25px;
    
        color: #666666;
    }

    h2 {
        font: normal 12.976px 'Lexend Deca';
        line-height: 16px;
    
        color: #666666;
    }

    .topoHabito {
        display: flex;
        justify-content: space-between;
    }

    .botaoDeletar {
        width: 13px;
        height: 15px;

        position: absolute;
        top: 11px;
        right: 10px;

        cursor: pointer;
    }

    .infoHabitoHoje {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .texto {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
`;

const Check = styled.div`
    width: 69px;
    height: 69px;

    background: ${props => props.feito ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

export {
    Habito,
    Check
}