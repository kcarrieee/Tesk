import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';
import bg from './bg.png';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  // handleCityReturn,
  // handleCity,
  staggerRevealClose
} from "./Animations";


const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });

    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' }});
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%'
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3,line4);
    }
  }, [state]);

  return (
    <>

    <div ref={el => (menuLayer = el)} className={styles.hamburger_menu}>
    
      <div ref={el => (reveal2 = el)} className={styles.menu_layer}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.menu_links}>
              
              <div className={styles.menu_links_nav}>
                <div ref={el => (info = el)} className={styles.info}>
                <h3>Обретите безмятежность с Tesk</h3>
              </div>
              <nav>
                <ul>
                    <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/opportunities'>
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/opportunities'>
                      Возможности
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/about'>
                      О приложении
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact'>
                      Контакты
                    </Link>
                  </li>
                   <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line4 = el)}
                      to='/contact'>
                        <span className={` ${styles.mobile_link}`}>регистрация</span>
                      
                    </Link>
                  </li>
                </ul>
              </nav>
              </div>
              <div className={styles.contact_info}>
                <p>© 2023 Tesk</p>
                <div className={styles.contact_info_links}>
                  <p>8 (954) xxx xx xx</p>
                  <p>desk@gmail.ru</p>
                  <p>supportdesk@gmail.ru</p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
       <div
        ref={el => (reveal1 = el)}
        className={styles.menu_secondary_background_color}>
        </div>
    </div>
    </>
  );
};

export default Hamburger;
