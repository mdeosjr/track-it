import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ContextoToken from '../../contexts/ContextoToken';
import ContextoPorcentagem from '../../contexts/ContextoPorcentagem'
import botaoDeletar from '../../assets/delete.svg';
import Topo from '../Topo';
import Menu from '../Menu';
import { Titulo } from '../Titulo'
import { Habito } from '../Habito';
import Input from '../Input';
import TextoGeral from '../TextoGeral'
import Container from '../Container';
import {
    CaixaTitulo,
    AdicionarHabito,
    Semana,
    Dia,
    Botoes,
    Cancelar, 
    Salvar
} from './style';

function HabitosPagina() {
    const [dias, setDias] = useState([
        {dia:'D', diaId:0, selecionado: false},
        {dia:'S', diaId:1, selecionado: false},
        {dia:'T', diaId:2, selecionado: false},
        {dia:'Q', diaId:3, selecionado: false},
        {dia:'Q', diaId:4, selecionado: false},
        {dia:'S', diaId:5, selecionado: false},
        {dia:'S', diaId:6, selecionado: false}
    ]);
    const [adicaoHabito, setAdicaoHabito] = useState(false);
    const [habito, setHabito] = useState('');
    const [listaHabitos, setListaHabitos] = useState([]);
    const [botao, setBotao] = useState(true);
    const [input, setInput] = useState(true);
    const { token } = useContext(ContextoToken);
    const { porcentagem } = useContext(ContextoPorcentagem)

    useEffect(() => renderizarHabitos())

    function renderizarHabitos() {
        const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promessa.then(resposta => setListaHabitos(resposta.data))
        promessa.catch(erro => console.log(erro.response)) 
    }

    function selecionarDia(diaId, diaSelecionado) {
        const objetoDias = [...dias];

        if(diaSelecionado===false) {
            objetoDias[diaId].selecionado = true
        } else {
            objetoDias[diaId].selecionado = false
        }
        setDias(objetoDias);
    }

    function resetarDias() {
        setDias([
            {dia:'D', diaId:0, selecionado: false},
            {dia:'S', diaId:1, selecionado: false},
            {dia:'T', diaId:2, selecionado: false},
            {dia:'Q', diaId:3, selecionado: false},
            {dia:'Q', diaId:4, selecionado: false},
            {dia:'S', diaId:5, selecionado: false},
            {dia:'S', diaId:6, selecionado: false}
        ])
    }

    function cancelar() {
        setHabito('');
        setAdicaoHabito(false);
        resetarDias();
    }

    function salvar() {
        const diasSelecionados = [];
        setBotao(false);
        setInput(false);
        dias.filter(dia => dia.selecionado)
            .map(dia => diasSelecionados.push(dia.diaId))

        const objetoHabito = {
            name: habito,
            days: diasSelecionados
        };

        const salvar = 
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', 
            objetoHabito, 
            {headers: 
                {Authorization: `Bearer ${token}`}
            })
        
        salvar.then(() => {
            renderizarHabitos(); 
            setAdicaoHabito(false);
            setHabito('');
            resetarDias();
            setBotao(true); 
            setInput(true);
        })
    }

    function deletar(id) {
        const resposta = window.confirm('Deseja deletar este hábito?')
        if (resposta) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                {headers: 
                    {Authorization: `Bearer ${token}`}
                }
            )
            .then(() => {renderizarHabitos()})
        }
    }

    return (
        <Container>
            <Topo/>
            <div className="caixaHabitos">
            <CaixaTitulo>
                <Titulo>Meus hábitos</Titulo>
                <AdicionarHabito onClick={() => setAdicaoHabito(true)}>+</AdicionarHabito>
            </CaixaTitulo>
                {adicaoHabito && 
                <Habito>
                    <Input 
                        ativo={input}
                        type="text" 
                        placeholder="nome do hábito"
                        name="habito"
                        onChange={e => setHabito(e.target.value)}
                        value={habito}
                    />
                    <Semana>
                        {dias.map(dia => 
                            <Dia 
                                selecionado={dia.selecionado}
                                diaId={dia.diaId} 
                                key={dia.diaId} 
                                onClick={() => selecionarDia(dia.diaId, dia.selecionado)}
                            > {dia.dia}
                            </Dia>)
                        }
                    </Semana>
                    <Botoes>
                        <Cancelar onClick={() => cancelar()}>Cancelar</Cancelar>
                        <Salvar onClick={() => salvar()}> 
                            {botao ? "Salvar" :
                                <Loader 
                                type="ThreeDots" 
                                color="#FFFFFF" 
                                height={30} width={30} 
                                />}
                        </Salvar>  
                    </Botoes>
                </Habito>}
                {listaHabitos.length === 0 ? 
                    <TextoGeral>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </TextoGeral> 
                    : 
                    listaHabitos.map(habito => 
                        <Habito key={habito.id}>
                            <div className="topoHabito">
                                <h1>{habito.name}</h1>
                                <img className="botaoDeletar" src={botaoDeletar} alt="botao deletar" onClick={() => deletar(habito.id)}></img>
                            </div>
                            <Semana>
                                {dias.map(dia => 
                                    <Dia 
                                        selecionado={habito.days.includes(dia.diaId)}
                                        diaId={dia.diaId} 
                                        key={dia.diaId} 
                                    > {dia.dia}
                                    </Dia>)
                                }
                            </Semana>
                        </Habito>
                    )   
                }
            </div>
            <Menu porcentagem={porcentagem}/>
        </Container>  
    );
}

export default HabitosPagina;