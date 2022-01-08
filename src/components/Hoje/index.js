import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Topo from '../Topo';
import Menu from '../Menu';
import Titulo from '../Titulo';
import Container from '../Container';
import ContextoToken from '../../contexts/ContextoToken';
import dayjs from 'dayjs'

function HojePagina() {
  const [habitos, setHabitos] = useState([]);
  const { token } = useContext(ContextoToken)

  useEffect(() => {
    const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    promessa.then(resposta => setHabitos(resposta.data))
    promessa.catch(erro => console.log(erro.response)) 
  }, [token]);

  return (
    <Container>
        <Topo/>
        <Titulo>
          {dayjs().format('dddd, DD/MM')}
        </Titulo>
        {/* {habitos.map((habito) => (
          <Habito/>
        ))} */}
        <Menu/>
    </Container>
  )
}

export default HojePagina;