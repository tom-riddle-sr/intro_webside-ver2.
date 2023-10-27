import React, { useState } from 'react'
import styles from "./card.module.css"
import clsx from 'clsx'

import Pic1 from "../00_Asset/basketball.png"
import Pic2 from "../00_Asset/skateboard.png"
const Card = (props) => {
  const { front_img, back_img } = props
  const [aa, setAa] = useState(false)

  const func = () => {
    setAa(!aa)
  }
  return (
    <div className={clsx(styles.card, aa && styles.card_afin)} onClick={func}>
      {/* <div className={styles.front} style={{ backgroundImage: `url(${front_img})` }}></div> */}
      {/* <div className={styles.front} style={{ backgroundImage: "../00_Asset/basketball.png" }}></div> */}
      {/* <div className={styles.back} style={{ backgroundImage: `url(${back_img})` }}></div> */}
      <img className={styles.front} src={Pic1}></img>
      <img className={styles.back} src={Pic1}></img>
    </div>
  )
}

export default Card
