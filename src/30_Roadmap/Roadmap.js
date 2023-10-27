import React, { useEffect, useState } from 'react'
import styles from "./roadmap.module.css"
import Road from "../00_Asset/road.svg"
import Ball from '../00_Asset/Ball/Ball'
import clsx from 'clsx'
import Stroke from '../50_Stroke/Stroke'

const Roadmap = (props) => {
  const { activeIndex } = props
  const [index, setIndex] = useState(0)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (activeIndex === 3) {
      setOpen(true)
      setShow1(true)
      setTimeout(() => {

        setShow2(true)
      }, 500)
      setTimeout(() => {

        setShow3(true)
      }, 1000)
    } else {
      setOpen(false)
      setShow1(false)
      setShow2(false)
      setShow3(false)
    }
  }, [activeIndex])

  // const cover_func1 = () => {
  //   if (activeIndex === 3) {
  //     if (index === 0) {
  //       setShow1(true)
  //       setIndex(index + 1)
  //     } else if (index === 1) {
  //       setShow2(true)
  //       setIndex(index + 1)

  //     } else if (index === 2) {
  //       setShow3(true)
  //     }
  //   } else {
  //     setShow1(false)
  //     setShow2(false)
  //     setShow3(false)
  //     setIndex(0)
  //   }
  // }
  // const cover_func2 = () => {
  //   if (activeIndex === 3) {
  //     if (index === 2) {
  //       setShow3(false)
  //       setIndex(index - 1)
  //     } else if (index === 1) {
  //       setShow2(false)
  //       setIndex(index - 1)

  //     } else if (index === 0) {
  //       setShow1(false)
  //     }
  //   } else {
  //     setShow1(false)
  //     setShow2(false)
  //     setShow3(false)
  //     setIndex(0)
  //   }
  // }
  return (
    <div className={styles.roadmap}>
      <div className={clsx(styles.container1, show1 && styles.show1)}>
        <p className={styles.p1}>Short-term </p>
        <p className={styles.p4}>熟悉前端工作<br></br>法文檢定</p>
      </div>
      <div className={clsx(styles.container2, show2 && styles.show2)}>
        <p className={styles.p2}>Medium-term </p>
        <p className={styles.p5}>   獨立開發<br></br>街頭藝人</p>
      </div>
      <div className={clsx(styles.container3, show3 && styles.show3)}>
        <p className={styles.p3}>Long-term</p>
        <p className={styles.p6}> 去法國一段時間<br></br>養貓</p>
      </div>


      <Stroke />

      <Ball number="3vw" color=" rgb(128, 46, 29)" top="90vh" left="40vw" />
      <Ball number="5vw" color="rgb(107, 157, 154)" top="50vh" left="5vw" />
      <Ball number="3vw" color="rgb(128, 46, 29)" top="0vh" left="95vw" />
      <Ball number="3vw" color="rgb(107, 157, 154)" top="60vh" left="85vw" />
      <Ball number="3vw" color="rgb(128, 46, 29)" top="20vh" left="45vw" />
      <Ball number="2vw" color="#896831" top="5vh" left="5vw" />



    </div >
  )
}

export default Roadmap
