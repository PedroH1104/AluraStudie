import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { useTarefaContext } from "../../common/context/Tarefa";
import { useState, useEffect } from 'react';

export default function Cronometro() {

  const { tarefaSelecionada, finalizarTarefa } = useTarefaContext();
  const [tempo, setTempo]= useState<number>();

  useEffect(() => {
    if(tarefaSelecionada?.tempo){
      setTempo(tempoParaSegundos(tarefaSelecionada.tempo));
    }
  }, [tarefaSelecionada])
  
  function regressiva (contador:number = 0){
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa();
    }, 1000)
  }

  return (   
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e início o cronômetro</p>        
        <div className={styles.relogioWrapper}>
            <Relogio tempo={tempo}></Relogio>
        </div>
        <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  )
}
