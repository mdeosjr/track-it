import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.div`
    margin-top: 68px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    img {
        width: 180px;
        height: 180px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    button {
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
    }
`;

const StyledLink = styled(Link)`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 13.976px;
    line-height: 17px;                                                          
    text-align: center;
    text-decoration-line: underline;

    color: #52B6FF;
`;

export {
    Form,
    StyledLink
}