import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import Botao from '../Botao';
import axios from 'axios';
import ContextoUsuario from '../../contexts/ContextoUsuario';
import ContextoToken from '../../contexts/ContextoToken';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Form, StyledLink } from '../Form.js';
import logo from '../../assets/logo.svg';

function LoginPagina() {
  const [botao, setBotao] = useState(true);
  const [input, setInput] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setImagemUsuarioLocal } = useContext(ContextoUsuario);
  const { setTokenLocal } = useContext(ContextoToken);
  const navigate = useNavigate();

  function erroLogin(erro) {
    alert(erro.response.data.message);
    setBotao(true);
    setInput(true);
    setEmail('');
    setPassword('');
  }

  function sucessoLogin(resposta) {
    navigate("/hoje");
    setImagemUsuarioLocal(resposta.data.image);
    setTokenLocal(resposta.data.token);
  }

  function logar(e) {
    e.preventDefault();

    const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
      email,
      password
    })

    setBotao(false);
    setInput(false);

    promessa.then(resposta => sucessoLogin(resposta))
    promessa.catch(erro => erroLogin(erro))
  }

  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form onSubmit={logar}>
            <Input
              ativo={input} 
              type="email" 
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              ativo={input}
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
                />
              }
            </Botao>
        </form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </Form>
  );
}

export default LoginPagina;                                                                       