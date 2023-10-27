import React from 'react'
import styles from "./ball.module.css"


const Ball = (props) => {
  const { number, color, top, left, move = "ball1" } = props
  return (
    <div className={styles[move]} style={{ width: number, height: number, backgroundColor: color, top: top, left: left }} >
    </div >
  )
}

export default Ball
