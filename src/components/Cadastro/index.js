import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../Input';
import Botao from '../Botao';
import logo from '../../assets/logo.svg';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Form, StyledLink } from '../Form';

function CadastroPagina() {
  const [dadosUsuario, setDadosUsuario] = useState({
      email: '',
      name: '',
      image: '',
      password: ''
  })
  const [botao, setBotao] = useState(true);
  const [input, setInput] = useState(true);
  const navigate = useNavigate();

  function erroCadastro(erro) {
    alert(erro.response.data.message);
    setBotao(true);
    setInput(true);
  }

  function cadastrar(e) {
    e.preventDefault();

    const promessa = 
      axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        {...dadosUsuario}
      )
    
    setBotao(false);
    setInput(false);
    
    promessa.then(() => navigate("/"))
    promessa.catch(erro => erroCadastro(erro));
  }

  function modificarInput(e) {
    setDadosUsuario({ ...dadosUsuario, [e.target.name]: e.target.value })
  }

  return (
    <Form>
        <img src={logo} alt="logo"></img>
        <form onSubmit={cadastrar}>
            <Input
              ativo={input} 
              type="email" 
              placeholder="email" 
              name="email"
              onChange={modificarInput}
              value={dadosUsuario.email}
            />
            <Input 
              ativo={input}
              type="password" 
              placeholder="senha" 
              name="password"
              onChange={modificarInput}
              value={dadosUsuario.password}
            />
            <Input 
              ativo={input}
              type="text" 
              placeholder="nome" 
              name="name"
              onChange={modificarInput}
              value={dadosUsuario.name}
            />
            <Input 
              ativo={input}
              type="text" 
              placeholder="foto" 
              name="image"
              onChange={modificarInput}
              value={dadosUsuario.image}
            />
            <Botao 
              type="submit" 
              ativo={botao}>
              {botao ? "Cadastrar" 
                : 
                <Loader 
                  type="ThreeDots" 
                  color="#FFFFFF" 
                  height={50} width={50} 
                />}
            </Botao>
        </form>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Form>
  );
}

export default CadastroPagina;