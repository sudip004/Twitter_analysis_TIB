import React from 'react'
import styles from "./AnalyzePage.module.css"

const AnalyzePage = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.boxContainer}>
            <h1>Analyze your tweets</h1>
            <div className={styles.twitetContainer}>
                <p>Tweet text</p>
                <input type="text" />
            </div>
            <div className={styles.userContainer}>
                <p>username</p>
                <input type="text" />
            </div>
            <button>Submit your Analysis</button>
        </div>
    </div>
  )
}

export default AnalyzePage