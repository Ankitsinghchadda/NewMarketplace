import React from 'react'
import styles from "../styles/Home.module.css"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-cards"
import 'swiper/css/navigation';
const Crousel = () => {
    return (
        <div className={styles.crousel_main}>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Crousel