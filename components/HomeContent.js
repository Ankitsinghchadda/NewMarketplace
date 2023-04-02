import React from "react"
import styles from "../styles/Home.module.css"
import TypeWriterText from "./TypeWriterText"
import CoverVideo from "./CoverVideo"
import About from "./About"
const HomeContent = () => {
    return (
        <div className={styles.home_main_div}>
            <div className={styles.home_main}>
                <div className={styles.home_content}>
                    <TypeWriterText />
                </div>
                <div className={styles.home_content}>
                    <CoverVideo />
                </div>
            </div>
            <div className={styles.about_main}>
                <About />
            </div>
        </div>
    )
}

export default HomeContent
