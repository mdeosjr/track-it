import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Topo from '../Topo';
import Menu from '../Menu';
import { Titulo, Subtitulo } from '../Titulo';
import Container from '../Container';
import { Habito, Check } from '../Habito';
import ContextoToken from '../../contexts/ContextoToken';
import ContextoPorcentagem from '../../contexts/ContextoPorcentagem';
import check from '../../assets/check.svg'
import dayjs from 'dayjs'

function HojePagina() {
  const [habitosHoje, setHabitosHoje] = useState([]);
  const { token } = useContext(ContextoToken);
  const { porcentagem, setPorcentagem } = useContext(ContextoPorcentagem);

  function renderizarHoje() {
     const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
    promessa.then(resposta => {setHabitosHoje(resposta.data)})
  }

  setPorcentagem(((habitosHoje.filter(habito => habito.done).length)/(habitosHoje.length))*100) 

  useEffect(() => renderizarHoje());

  function clicarHabito(done, id) {
    {!done ? 
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then(() => {renderizarHoje()})
      : 
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then(() => {renderizarHoje()})
    }
  }

  return (
    <Container>
        <Topo/>
        {habitosHoje.length === 0 ? 
        <Titulo>Nenhum hábito para hoje</Titulo> 
        :
        <>
          <Titulo>
            {dayjs().format('dddd, DD/MM')}
          </Titulo>
          <Subtitulo porcentagem={porcentagem}>
            {porcentagem === 0 ? 'Nenhum hábito concluído ainda' : `${porcentagem}% dos hábitos concluídos`}
          </Subtitulo>
          {habitosHoje.map(habito => 
            <Habito key={habito.id}>
              <div className="infoHabitoHoje">
                <div className="texto">
                  <h1>{habito.name}</h1>
                  <h2>Sequência atual: {habito.currentSequence} {habito.currentSequence === 1 ? 'dia' : 'dias'}</h2>
                  <h2>Seu recorde: {habito.highestSequence} {habito.highestSequence === 1 ? 'dia' : 'dias'}</h2>
                </div>
                <Check 
                  feito={habito.done}
                  onClick={() => clicarHabito(habito.done, habito.id)}>
                  <img src={check} alt="botao check"></img>
                </Check>
              </div>
            </Habito>
          )}
        </>
        } 
        <Menu porcentagem={porcentagem}/>
    </Container>
  )
}

export default HojePagina;