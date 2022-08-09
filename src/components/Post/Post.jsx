import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <img className={styles.avatar} src="https://github.com/aledev21.png" />
          <div className={styles.authorInfo} >
            <strong>Alessandro Assis</strong>
            <span>Fullstack Developer</span>
          </div>


        </div>

        <time title="05 de Agosto ás 08:13h " dateTime="2022-08-05 08:13:30" >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <p> <a href="#">  👉 jane.design/doctorcare  </a> </p>
        <p>
          <a>  #novoprojeto </a>
          <a> #nlw </a>
          <a>  #rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>

  )
}