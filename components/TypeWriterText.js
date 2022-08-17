import React from 'react'
import styles from "../styles/Home.module.css"
import Typewriter from 'typewriter-effect';

const TypeWriterText = () => {
    return (
        <div className={styles.typewritertext_main}>
            <h1 className='heading1'>Discover cool digital art & collect
                <Typewriter
                    options={{
                        strings: ['NFTs.', 'Collectible Items.', 'Awesome Art.'],
                        pause: 2000,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
        </div>
    )
}

export default TypeWriterText