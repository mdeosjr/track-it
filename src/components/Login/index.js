import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';

function Login() {
  return (
      <Login>
          <form>
              <Input type="email" placeholder="email"></Input>
              <Input type="password" placeholder="senha"></Input>
              <button type="submit">Entrar</button>
              <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
          </form>
      </Login>
  );
}

export default Login;