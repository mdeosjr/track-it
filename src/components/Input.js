import styled from 'styled-components'

const Input = styled.input`
    all: unset;
    width: 291px;
    height: 45px;
    padding-left: 11px;

    background: ${props => props.ativo ? '#FFFFFF' : '#F2F2F2'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    color: ${props => props.ativo ? '#DBDBDB' : '#AFAFAF'};

    ${props => !props.ativo && "pointer-events: none;"}

    &::placeholder {
        font: normal 19.976px 'Lexend Deca';
        line-height: 25px;
    
        color: #DBDBDB;
    }
`;

export default Input;