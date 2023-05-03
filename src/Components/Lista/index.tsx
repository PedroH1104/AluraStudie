import Item from './Item'
import styles from './Lista.module.scss'
import { ITarefa } from '../../types/ITarefa'
import { useTarefaContext } from '../../common/context/Tarefa'

export default function Lista() {     

    const { tarefas } = useTarefaContext()      

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2> 
            <ul>
                {tarefas.map((item:ITarefa) => (
                    <Item 
                        key = {item.id}
                        {...item}
                    />
                ))}               
            </ul>            
        </aside>
    )
}
