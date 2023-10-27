import React, { useEffect, useState } from 'react'
import styles from "./page2.module.css"
import pic3 from "../../00_Asset/pic3.png"
import pic4 from "../../00_Asset/pic4.png"
import pic5 from "../../00_Asset/pic5.png"
import pic6 from "../../00_Asset/pic6.png"

import pic7 from "../../00_Asset/infj.png"
import pic8 from "../../00_Asset/entp.png"
import clsx from "clsx"


const Page2 = (props) => {

  const { activeIndex } = props
  const [pic3_show, setPic3_show] = useState(false)
  const [pic4_show, setPic4_show] = useState(false)
  const [pic5_show, setPic5_show] = useState(false)
  useEffect(() => {
    if (activeIndex === 1) {
      setPic4_show(true)
      setTimeout(() => {
        setPic3_show(true)
      }, 200)
      setTimeout(() => {
        setPic5_show(true)
      }, 300)
    } else {
      setPic4_show(false)
      setPic5_show(false)
      setPic3_show(false)


    }
  }, [activeIndex, pic4_show, pic5_show])
  return (
    <div className={styles.page2}>
      <p className={clsx(styles.p5, pic4_show && styles.show)}>Info</p>
      <div className={styles.container1}>
        <div className={styles.container1_1}>
          <div className={clsx(styles.pic4, pic4_show && styles.show)} ></div>
          <div className={clsx(styles.pic5, pic4_show && styles.show)}></div>
          <div className={clsx(styles.pic6, pic4_show && styles.show)}></div>
        </div>
        <div className={clsx(styles.container1_2, pic3_show && styles.show)}>
          <img className={styles.pic3} src={pic3}></img>

        </div>
      </div>
      <div className={clsx(styles.container2, pic5_show && styles.show)}>
        <div className={styles.container2_1}>
          <p className={styles.name}>張 榕家</p>
          <div className={styles.countrybox}>
            <svg className={styles.svg1} version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" space="preserve" fill="#802e1d" stroke="#802e1d"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <path d="M16,1C9.925,1,5,5.925,5,12c0,10,10,19,11,19s11-9,11-19C27,5.925,22.075,1,16,1z M16,16 c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C20,14.209,18.209,16,16,16z"></path> </g></svg>
            <p className={styles.country}>桃園</p>
            <p className={styles.school}>逢甲大學 行銷系</p>

          </div>
          <div className={styles.librabox}>
            <svg style={{ width: "1vw", marginRight: "0.5vw" }} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#802e1d" stroke="#802e1d"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="32" cy="32" r="30" fill="#802e1d"> </circle> <g fill="#ffffff" stroke="#ffffff" strokeMiterlimit="10"> <path d="M47.6 43.5H16.5c-1.9 0-1.9 3 0 3h31.1c1.9 0 1.9-3 0-3z"> </path> <path d="M16.4 39.1h12c.8 0 1.5-.7 1.5-1.5v-.1c0-.5-.3-1.1-.7-1.3c-8.5-4-6.7-18.8 2.9-18.8c4.3 0 7 3.5 8.1 7.2c1.3 4.6-1.4 9.3-5.3 11.3c-.4.2-.7.8-.7 1.3v.2c0 .8.7 1.5 1.5 1.5h12c1.9 0 1.9-3 0-3h-8.2c1.2-1.2 2.3-2.7 2.5-3.1c1.2-2.2 1.6-5.2 1.2-7.7c-1-6.1-5-10.8-11.1-10.8c-5.6 0-9.9 4.6-11.4 9.5c-.7 2.5-.5 5.6.5 8c.6 1.3 1.2 2.7 2.2 3.7c0 0 .2.2.4.5h-7.4c-1.9.1-1.9 3.1 0 3.1z"> </path> </g> </g></svg>
            <p className={styles.libra}>天秤座</p>

          </div>
        </div>
        <div className={styles.container2_3}>
          <img className={styles.pic7} src={pic7}></img>
          <img className={styles.pic8} src={pic8}></img>
        </div>


      </div>
    </div >
  )
}

export default Page2
