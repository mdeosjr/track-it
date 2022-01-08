import styled from 'styled-components';

const FormHabito = styled.div`
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

    .lixo {
        display: flex;
        justify-content: space-between;
    }

    img {
        width: 13px;
        height: 15px;

        position: absolute;
        top: 11px;
        right: 10px;
    }
`;

export default FormHabito;