import React from 'react'
import styles from "../styles/Home.module.css"
import Typewriter from 'typewriter-effect';

const TypeWriterText = () => {
    return (
        <div className={styles.typewritertext_main}>
            <h1 className='heading1'>Discover cool digital art & collect
                <Typewriter

                    options={{
                        wrapperClassName: "typewritterString",
                        strings: ['NFTs.', 'Collectible Items.', 'Awesome Art.'],
                        pauseFor: 2000,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>

            <h3 className='description1'>RL is a Decentralized NFT Marketplace powered by Smart Contracts where you can Buy, Sell, List and Auction NFTs easy.</h3>
            <div className={styles.home_buttons}>
                <button className='button1'>Buy NFT</button>
                <button className='button1'>Create NFT</button>
            </div>
        </div>
    )
}

export default TypeWriterText