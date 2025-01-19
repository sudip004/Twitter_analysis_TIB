import React from 'react'
import styles from "./Footer.module.css"
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
        <FaRegCopyright className={styles.icone}/>
        <p>  ResonanceAI .All Right Reserve </p>
    </div>
  )
}

export default Footer