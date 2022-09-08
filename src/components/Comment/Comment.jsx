import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/aledev21.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Alessandro Assis</strong>
              <time title="05 de Agosto ás 08:13h " dateTime="2022-08-05 08:13:30" >Cerca de 1h atás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, Parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>


  )
}