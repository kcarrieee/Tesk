import React,{ useEffect } from 'react';
import styles from './HeaderText.module.scss';
import gsap from 'gsap';

const HeaderText = ({blacktext, greytext1, greytext2, greytext3}) => {
    useEffect(() => {
     const items = document.querySelectorAll('#main-text > span')
        gsap.to([items[0],items[1],items[2],items[3]], {
        duration: 1,
        y: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5
        }
    });
    },[])

  return (
    <h1 className={styles.main}  id="main-text">
        <span className={`${styles.black_span} ${styles.lineParent}`}> 
         {blacktext} </span> 
        <span className={styles.lineParent }>
          {greytext1}
          </span>
          <span className={styles.lineParent}>
          {greytext2}
          </span>
          <span className={styles.lineParent}>
          {greytext3}
          </span>
      </h1>
  )
}

export default HeaderText