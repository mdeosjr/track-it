import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import Botao from '../Botao';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Form, StyledLink } from '../Form.js';
import logo from '../../assets/logo.svg';

function LoginPagina() {
  const [botao, setBotao] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function logar(e) {
    e.preventDefault();

    const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
      email,
      password
    })

    setBotao(false);

    promessa.then(resposta => navigate("/hoje"))
    promessa.catch(erro => (console.log(erro.response), setBotao(true)))
  }

  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form onSubmit={logar}>
            <Input 
              type="email" 
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              type="password" 
              placeholder="senha"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Botao 
              type="submit" 
              ativo={botao}
            >
              {botao ? "Entrar" 
                : 
                <Loader 
                  type="ThreeDots" 
                  color="#FFFFFF" 
                  height={50} width={50} 
                />}
            </Botao>
        </form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </Form>
  );
}

export default LoginPagina;                                                                       