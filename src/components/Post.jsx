import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <img className={styles.avatar} src="https://github.com/aledev21.png"  /> 
          <div className={styles.authorInfo} >
              <strong>Alessandro Assis</strong>
              <span>Fullstack Developer</span>
         </div>


        </div>

        <time title="05 de Agosto ás 08:13h " dateTime="2022-08-05 08:13:30" >Publicado há 1h</time>
      </header>
    </article>
  )
}