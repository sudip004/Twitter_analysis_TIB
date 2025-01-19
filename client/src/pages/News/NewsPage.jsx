import React from 'react'
import styles from "./NewsPage.module.css"
import { BsGraphUpArrow } from "react-icons/bs";


const NewsPage = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.boxContainer}>
            <h3>#Tech News</h3>
            <p>Lorem ipsum, dolor sit amet </p>
            <BsGraphUpArrow className={styles.iccon}/>
            <h3>#Related tweets</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente.</p>
        </div>
        <div className={styles.boxContainer}>
            <h3>#Tech News</h3>
            <p>Lorem ipsum, dolor sit amet </p>
            <BsGraphUpArrow className={styles.iccon}/>
            <h3>#Related tweets</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente.</p>
        </div>
        <div className={styles.boxContainer}>
            <h3>#Tech News</h3>
            <p>Lorem ipsum, dolor sit amet </p>
            <BsGraphUpArrow className={styles.iccon}/>
            <h3>#Related tweets</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente.</p>
        </div>
    </div>
  )
}

export default NewsPage