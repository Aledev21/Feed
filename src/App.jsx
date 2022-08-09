import { Post } from "./components/Post/Post" 
import { Header } from './components/Header/Hearder';
import { Sidebar } from "./components/Sidebar/Sidebar";

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
          <Post />
            
          </main>
           </div>
          

            </>
  )
}
