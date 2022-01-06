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
`;

const StyledLink = styled(Link)`
    font: normal 13.976px 'Lexend Deca';
    line-height: 17px;                                                          
    text-align: center;
    text-decoration-line: underline;

    color: #52B6FF;
`;

export {
    Form,
    StyledLink
}