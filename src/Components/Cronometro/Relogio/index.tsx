import styles from './Relogio.module.scss'

interface RelogioProps {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: RelogioProps) {

  const minutos = Math.floor(tempo / 60);     // ignorando o resto
  const segundos = tempo % 60 ;               // pegando o resto

  const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, "0");           // se colocar 1 minuto e 1 segundo, para n ficar 10 minutos e 10 segundos usa esse comando
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, "0");

  return (
    <>
        <span className={styles.relogioNumero}>{minutosDezena}</span>
        <span className={styles.relogioNumero}>{minutosUnidade}</span>
        <span className={styles.relogioDivisao}>:</span>
        <span className={styles.relogioNumero}>{segundosDezena}</span>
        <span className={styles.relogioNumero}>{segundosUnidade}</span>        
    </>
  )
}
