import React from 'react'
import styles from "./page1.module.css"
import pic1 from "../../00_Asset/pic1.png"
import pic2 from "../../00_Asset/pic2.png"
import Ball from "../../00_Asset/Ball/Ball"
const Page1 = () => {
  return (
    <div className={styles.page1}>
      <div data-aos="flip-right" className={styles.title}>
        <p className={styles.p1}>Hi!私は</p>
        <Ball number="5vw" color="#896831" top="5vh" left="15vw" />

      </div>
      <p className={styles.p2}>西西</p>
      <img className={styles.pic1} src={pic1}></img>
      <img className={styles.pic2} src={pic2}></img>
      <Ball number="2vw" color="rgb(128, 46, 29)" top="13vh" left="73vw" move="ball2" />
      <Ball number="3vw" color=" #896831" top="90vh" left="50vw" />
      <Ball number="5vw" color="rgb(107, 157, 154)" top="50vh" left="5vw" />
      <Ball number="3vw" color="rgb(128, 46, 29)" top="40vh" left="95vw" />
      <Ball number="3vw" color="rgb(107, 157, 154)" top="60vh" left="85vw" />
      <Ball number="2vw" color="rgb(128, 46, 29)" top="5vh" left="5vw" />

    </div>
  )
}

export default Page1
