import React, { useState } from 'react'
import Botao from '../Botao'
import styles from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { useTarefaContext } from '../../common/context/Tarefa';

export default function Formulario() {

    const {tarefas, setTarefas} = useTarefaContext()
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento:React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas([...tarefas, {tarefa, tempo, selecionado:false, completado:false, id:uuidv4()}]);
        setTarefa("")
        setTempo("00:00")
    } 
    
    return (
        <form className={styles.novaTarefa} onSubmit={evento => adicionarTarefa(evento)}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text"
                    name="tarefa" 
                    value={tarefa}
                    onChange={(evento) => setTarefa(evento.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required                        
                />            
            </div>

            <div className={styles.inputContainer}>
            <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={(evento) => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="1:30:00"
                    required                   
                />
            </div>
            <Botao tipo="submit">Adicionar</Botao>
        </form>    
    )
}
