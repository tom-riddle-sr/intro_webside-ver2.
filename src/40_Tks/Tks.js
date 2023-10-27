import React, { useEffect, useState } from 'react'
import styles from "./tks.module.css"
import clsx from 'clsx'
import Ball from '../00_Asset/Ball/Ball'
const Tks = (props) => {
  const { activeIndex } = props
  const [open, setOpen] = useState(false)

  useEffect(() => {

    if (activeIndex === 4) {
      setOpen(true)
    } else { setOpen(false) }


  }, [activeIndex])

  return (
    <div className={styles.tks, open && "animate__animated animate__shakeX"}>
      <p className={clsx(styles.p, open && styles.dd)}>
        Tks
      </p>
      <Ball number="2vw" color="rgb(128, 46, 29)" top="0vh" left="73vw" move="ball1" />
      <Ball number="3vw" color=" #896831" top="90vh" left="50vw" />
      <Ball number="5vw" color="rgb(107, 157, 154)" top="50vh" left="5vw" />
      <Ball number="3vw" color="rgb(128, 46, 29)" top="40vh" left="95vw" />
      <Ball number="3vw" color="rgb(107, 157, 154)" top="60vh" left="85vw" />
      <Ball number="2vw" color="#896831" top="5vh" left="5vw" />
    </div>

  )
}

export default Tks
