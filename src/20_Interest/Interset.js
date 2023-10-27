import React, { useState, useEffect } from 'react'
import styles from "./interest.module.css"
import Basketball from "../00_Asset/basketball.png"
import Skateboard from "../00_Asset/skateboard.png"
import Guitar from "../00_Asset/guitar.png"
import Modal from "./sub/Modal"
import Ball from '../00_Asset/Ball/Ball'
import clsx from 'clsx'
const Interset = (props) => {
  const { activeIndex } = props
  const [openModal_switch, setOpenModal_switch] = useState(false)
  const [payload, setPayload] = useState(false)
  const [interest_show, setInterest_show] = useState(false)
  const [img1_show, setImg1_show] = useState(false)
  const [img2_show, setImg2_show] = useState(false)
  const [img3_show, setImg3_show] = useState(false)
  useEffect(() => {
    if (activeIndex === 2) {
      setInterest_show(true)
      setTimeout(() => {
        setImg1_show(true)
      }, 200)
      setTimeout(() => {
        setImg2_show(true)
      }, 300)
      setTimeout(() => {
        setImg3_show(true)
      }, 400)
    } else {
      setInterest_show(false)
      setImg1_show(false)
      setImg2_show(false)
      setImg3_show(false)


    }
  }, [activeIndex])
  const openModal_func = (aa) => {
    setPayload(aa)
    setOpenModal_switch(!openModal_switch)
  }
  return (
    <div className={styles.interest}>
      <p className={clsx(styles.interest1, interest_show && styles.interest1_show)}>Interest</p>
      {/* <p className={styles.line}></p> */}

      <img onClick={() => { openModal_func("Guitar") }} className={clsx(styles.pic1, img1_show && styles.pic1_show)} src={Guitar}></img>
      <img onClick={() => { openModal_func("Basketball") }} className={clsx(styles.pic2, img2_show && styles.pic2_show)} src={Basketball}></img>
      <img onClick={() => { openModal_func("Skateboard") }} className={clsx(styles.pic3, img3_show && styles.pic3_show)} src={Skateboard}></img>
      {openModal_switch ? <Modal pic={payload} openModal_func={openModal_func} /> : null}
      <Ball number="2vw" color="rgb(128, 46, 29)" top="0vh" left="73vw" move="ball1" />
      <Ball number="3vw" color=" #896831" top="90vh" left="50vw" />
      <Ball number="5vw" color="rgb(107, 157, 154)" top="50vh" left="5vw" />
      <Ball number="3vw" color="rgb(128, 46, 29)" top="40vh" left="95vw" />
      <Ball number="3vw" color="rgb(107, 157, 154)" top="60vh" left="85vw" />
      <Ball number="2vw" color="#896831" top="5vh" left="5vw" />
    </div>
  )
}

export default Interset
