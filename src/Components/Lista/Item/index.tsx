import { ITarefa } from '../../../types/ITarefa'
import { useTarefaContext } from '../../../common/context/Tarefa';
import styles from './Item.module.scss'

export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefa) {

  const { selecionaTarefa } = useTarefaContext();

  return (
    <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : ""} ${completado? styles.itemCompletado : ''}`} 
      onClick={() => !completado  && selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      })}
    >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={styles.concluido} aria-label='tarefa completada'></span>}
    </li>
  )
}
