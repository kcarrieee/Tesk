import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import Text from '../../Shared/Text/Text';



const Hero = () => {

  let heroImg = useRef(null);

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
    
     gsap.from( heroImg, {
      opacity: 0,
    });

    gsap.to( heroImg, {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <section className={styles.hero}>
        <Text tag='h1' className={styles.mobile}>
        <span> От хаоса к структуре </span> 
          Tesk дает уверенность в том, что все 
          организовано и принято во внимание, чтобы
          вы могли преуспеть в важных для себя проектах и делах.
      </Text>
      <h1 className={styles.main}  id="main-text">
        <span className={`${styles.black_span} ${styles.lineParent}`}> От хаоса к структуре </span> 
        <span className={styles.lineParent }>
          Tesk дает уверенность в том, что все 
          </span>
          <span className={styles.lineParent}>
          организовано и принято во внимание, чтобы
          </span>
          <span className={styles.lineParent}>
          вы могли преуспеть в важных для себя делах.
          </span>
      </h1>
      <div className={styles.hero_img} ref={el => (heroImg = el)}></div>
    </section>
  );
}

export default Hero;