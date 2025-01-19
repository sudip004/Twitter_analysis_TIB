import React from 'react'
import styles from "./Header.module.css"
import { BsGraphUpArrow } from "react-icons/bs";


const Header = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
            <BsGraphUpArrow className={styles.logo}/>
            <div className={styles.logoText}>ResonanceAI</div>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.text}>Home Page</div>
            <div className={styles.text}>Analytics Results</div>
            <div className={styles.text}>Trending Topics</div>
            <div className={styles.text}>LogOut</div>
            <div className={styles.profile}></div>
        </div>
    </div>
  )
}

export default Header