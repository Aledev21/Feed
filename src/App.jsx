import { Post } from "./components/Post" 
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
          <Post />
            
          </main>
           </div>
          

            </>
  )
}
