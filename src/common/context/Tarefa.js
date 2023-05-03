import { createContext, useContext, useState } from 'react'

export const TarefaContext = createContext();
TarefaContext.displayName = "Tarefa";

export const TarefaProvider = ({ children }) => {
        const [tarefas, setTarefas] = useState([])
        const [tarefaSelecionada, setTarefaSelecionada] = useState();

        return ( 
            <TarefaContext.Provider
                value={{
                    tarefas, 
                    setTarefas,
                    tarefaSelecionada,
                    setTarefaSelecionada
                }}  
            >
                {children}                
            </TarefaContext.Provider>
        )
}

export const useTarefaContext = () => {
    const {
        tarefas,
        setTarefas,
        tarefaSelecionada, 
        setTarefaSelecionada
    } = useContext(TarefaContext);

    function selecionaTarefa(tarefaSelecionada){
        setTarefaSelecionada(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })))
    }   

    function finalizarTarefa(){
        if(tarefaSelecionada) {
            setTarefaSelecionada(undefined)
            setTarefas(tarefasAnteriores =>  tarefasAnteriores.map(tarefa => {
                if(tarefa.id === tarefaSelecionada.id){
                    return {
                        ...tarefa,
                        selecionado: false,
                        completado: true
                    }
                }
                return tarefa;
            }))
        }
    }

    return {
        tarefaSelecionada,
        setTarefaSelecionada,
        selecionaTarefa,
        tarefas,
        setTarefas,
        finalizarTarefa
    }
}