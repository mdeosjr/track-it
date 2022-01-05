import React from 'react';
import Input from '../Input';
import logo from '../../assets/logo.svg';
import { Form, StyledLink } from '../Form';

function CadastroPagina() {
  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form>
            <Input type="email" placeholder="email"></Input>
            <Input type="password" placeholder="senha"></Input>
            <Input type="text" placeholder="nome"></Input>
            <Input type="text" placeholder="foto"></Input>
            <button type="submit">Cadastrar</button>
        </form>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Form>
  );
}

export default CadastroPagina;