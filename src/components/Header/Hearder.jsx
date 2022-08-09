import styles from "./Header.module.css"

import IgniteSimbol from '../../assets/Ignite-simbol.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteSimbol} alt="" />

    </header>
  );
}