import React from 'react';
import Input from '../Input';
import { Form, StyledLink } from '../Form.js';
import logo from '../../assets/logo.svg';

function LoginPagina() {
  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form>
            <Input type="email" placeholder="email"></Input>
            <Input type="password" placeholder="senha"></Input>
            <button type="submit">Entrar</button>
        </form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </Form>
  );
}

export default LoginPagina;                                                                       