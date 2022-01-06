import styled from 'styled-components'

const Input = styled.input`
    all: unset;
    width: 291px;
    height: 45px;
    padding-left: 11px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;
    
        color: #DBDBDB;
    }
`;

export default Input;