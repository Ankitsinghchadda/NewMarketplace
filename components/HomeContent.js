import React from 'react'
import styles from "../styles/Home.module.css"
import TypeWriterText from './TypeWriterText'
const HomeContent = () => {
    return (
        <div className={styles.home_main_div}>
            <div className={styles.home_main}>
                <div className={styles.home_content}><TypeWriterText /></div>
                <div className={styles.home_content}><h1>Video </h1></div>


            </div>
        </div>
    )
}

export default HomeContent