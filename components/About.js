import React from 'react'
import styles from "../styles/Home.module.css"
import Crousel from "./Crousel.js"
const About = () => {
    return (
        <>
            <div className={styles.about_content}><Crousel /></div>
            <div className={styles.about_content}>Detail</div>
        </>
    )
}

export default About