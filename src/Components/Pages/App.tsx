import Formulario from '../Formulario';
import Lista from '../Lista';
import styles from './App.module.scss'
import Cronometro from '../Cronometro';
import { TarefaProvider } from '../../common/context/Tarefa';


function App() {   

  return (
    <div className={styles.AppStyle}>
      <TarefaProvider>
        <Formulario></Formulario>
        <Lista></Lista>
        <Cronometro></Cronometro>
      </TarefaProvider>
    </div>
  );
}

export default App;
