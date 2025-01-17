import React, { useState } from 'react'
import styles from "./Landingpage.module.css"
import LoginPage from '../Login/LoginPage'



const LandingPage = () => {

const [log,setLog] =useState(false)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainere}>okk</div>
      {
        log ? <div className={styles.rightContainer}>hii
        
        </div> :
        <LoginPage/>
      }
    </div>
  )
}

export default LandingPage