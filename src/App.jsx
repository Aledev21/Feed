import { Post } from "./Post" 
import { Header } from './components/Hearder';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
            <> 
            <Header />

           <div className={styles.wrapper}>
          <Sidebar />

          <main>
          <Post 
            author="Gabriel"  
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae, iure, dicta laudantium ab iusto odit adipisci maiores beatae repellendus, expedita accusantium perspiciatis earum soluta deleniti. Quos autem adipisci eum!"
            />
            <Post  author="Pedro"
            content="Post muito legal"/>
          </main>
           </div>
          

            </>
  )
}
