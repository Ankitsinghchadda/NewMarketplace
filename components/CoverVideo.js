import React from 'react'
import homeImage from "../assest/homeImage.png"
import styles from "../styles/Home.module.css"
import Image from 'next/image'

const CoverVideo = () => {
    return (
        <div className={styles.videoContainer}>
            <Image src={homeImage} layout="responsive" />
        </div>
    )
}
export default CoverVideo