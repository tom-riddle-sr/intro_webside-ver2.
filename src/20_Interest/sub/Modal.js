import React, { useEffect, useState } from 'react';
import styles from "./modal.module.css";
import Guitar from "../../00_Asset/guitar1.png";
import Basketball from "../../00_Asset/basketball1.png";
import Skateboard from "../../00_Asset/skateboard1.JPG";

const Modal = (props) => {
  const { pic, openModal_func } = props;
  const [selectedPic, setSelectedPic] = useState(null);
  const [switch1, setSwitch1] = useState(false);

  useEffect(() => {
    if (pic === "Guitar") {
      setSwitch1(true)
    } else if (pic === "Skateboard") {
      setSwitch1(false)
      setSelectedPic(Skateboard);
    } else if (pic === "Basketball") {
      setSwitch1(false)
      setSelectedPic(Basketball);
    }
  }, [pic]);

  return (
    <div className={styles.modal}>
      {switch1 ? <iframe width="560" height="315" src="https://www.youtube.com/embed/MNPr_1xMQ1M?si=kGVgmYddUzn7DXkz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> :
        <img className={styles.pic} src={selectedPic} alt="Modal Image" />
      }
      <svg onClick={openModal_func} className={styles.svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)" stroke="#802e1d"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLWinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#802e1d"></path> </g></svg>

    </div>
  );
}

export default Modal;
