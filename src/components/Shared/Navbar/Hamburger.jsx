import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

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


const Hamburger = ({ state,handleMenu,disabled }) => {
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
             <div className={styles.innerheader}>
            <div className={styles.logo}>
              <Link to="/">
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.28 2.65V0.66H11.17V2.65H6.72V15H4.74V2.65H0.28ZM20.8136 8.86C20.8136 9.09333 20.7669 9.30333 20.6736 9.49C20.5869 9.67 20.4769 9.82667 20.3436 9.96C20.2103 10.0867 20.0603 10.1867 19.8936 10.26C19.7336 10.3267 19.5803 10.36 19.4336 10.36H12.1336C12.1936 10.7667 12.3269 11.1433 12.5336 11.49C12.7403 11.8367 12.9969 12.14 13.3036 12.4C13.6103 12.6533 13.9569 12.8533 14.3436 13C14.7303 13.1467 15.1336 13.22 15.5536 13.22C15.8603 13.22 16.1536 13.1833 16.4336 13.11C16.7203 13.03 16.9903 12.92 17.2436 12.78C17.3769 12.7067 17.5069 12.6533 17.6336 12.62C17.7603 12.5867 17.9003 12.57 18.0536 12.57C18.2669 12.57 18.4603 12.61 18.6336 12.69C18.8069 12.77 18.9703 12.8867 19.1236 13.04L19.5036 13.42C19.0036 13.9533 18.4169 14.3767 17.7436 14.69C17.0703 14.9967 16.3403 15.15 15.5536 15.15C14.8136 15.15 14.1136 15.01 13.4536 14.73C12.8003 14.4433 12.2269 14.0567 11.7336 13.57C11.2469 13.0767 10.8603 12.5033 10.5736 11.85C10.2936 11.19 10.1536 10.49 10.1536 9.75C10.1536 9.01 10.2936 8.31333 10.5736 7.66C10.8603 7 11.2469 6.42667 11.7336 5.94C12.2269 5.44667 12.8003 5.06 13.4536 4.78C14.1136 4.49333 14.8136 4.35 15.5536 4.35C16.1736 4.35 16.7669 4.45333 17.3336 4.66C17.9003 4.86667 18.4136 5.15 18.8736 5.51C19.3336 5.87 19.7269 6.29667 20.0536 6.79C20.3869 7.28333 20.6269 7.82 20.7736 8.4C20.7936 8.47333 20.8036 8.55 20.8036 8.63C20.8036 8.71 20.8069 8.78667 20.8136 8.86ZM12.8836 8.43H18.7636C18.6303 8.11667 18.4569 7.83 18.2436 7.57C18.0303 7.30333 17.7836 7.07667 17.5036 6.89C17.2303 6.69667 16.9269 6.54667 16.5936 6.44C16.2603 6.33333 15.9136 6.28 15.5536 6.28C15.1603 6.28 14.7836 6.34333 14.4236 6.47C14.0703 6.59 13.7469 6.76 13.4536 6.98C13.1669 7.2 12.9169 7.46333 12.7036 7.77C12.4969 8.07 12.3403 8.4 12.2336 8.76C12.2869 8.68667 12.3669 8.61333 12.4736 8.54C12.5803 8.46667 12.7169 8.43 12.8836 8.43ZM22.703 12.75C22.8363 12.6833 22.9663 12.63 23.093 12.59C23.2263 12.5433 23.3596 12.52 23.493 12.52C23.6663 12.52 23.8296 12.5533 23.983 12.62C24.143 12.6867 24.333 12.7967 24.553 12.95C24.7063 13.0567 24.873 13.1333 25.053 13.18C25.233 13.2267 25.4196 13.25 25.613 13.25C25.8196 13.25 26.023 13.22 26.223 13.16C26.4296 13.0933 26.613 13 26.773 12.88C26.933 12.7533 27.063 12.6 27.163 12.42C27.263 12.24 27.313 12.03 27.313 11.79C27.313 11.6033 27.283 11.4433 27.223 11.31C27.1696 11.1767 27.073 11.0567 26.933 10.95C26.793 10.8367 26.603 10.73 26.363 10.63C26.1296 10.5233 25.8363 10.41 25.483 10.29C25.1163 10.1633 24.753 10.02 24.393 9.86C24.0396 9.69333 23.723 9.49333 23.443 9.26C23.163 9.02667 22.9363 8.74333 22.763 8.41C22.5896 8.07667 22.503 7.67667 22.503 7.21C22.503 6.80333 22.5963 6.42667 22.783 6.08C22.9696 5.72667 23.213 5.42333 23.513 5.17C23.8196 4.91667 24.1663 4.71667 24.553 4.57C24.9396 4.42333 25.333 4.35 25.733 4.35C26.1396 4.35 26.5096 4.42333 26.843 4.57C27.183 4.71667 27.473 4.88333 27.713 5.07C27.9596 5.25667 28.153 5.43333 28.293 5.6C28.4396 5.76667 28.5296 5.87 28.563 5.91L28.093 6.31C27.813 6.55 27.4863 6.67 27.113 6.67C26.9796 6.67 26.8363 6.64333 26.683 6.59C26.5363 6.53 26.363 6.45 26.163 6.35C26.0296 6.28333 25.8863 6.25 25.733 6.25C25.473 6.25 25.2563 6.28667 25.083 6.36C24.9163 6.43333 24.7796 6.52333 24.673 6.63C24.573 6.73 24.503 6.83667 24.463 6.95C24.423 7.05667 24.403 7.14333 24.403 7.21C24.403 7.40333 24.453 7.56667 24.553 7.7C24.653 7.82667 24.783 7.94 24.943 8.04C25.103 8.13333 25.283 8.21667 25.483 8.29C25.6896 8.36333 25.8963 8.43333 26.103 8.5C26.503 8.63333 26.8896 8.78667 27.263 8.96C27.6363 9.13333 27.9663 9.34667 28.253 9.6C28.5463 9.85333 28.7796 10.16 28.953 10.52C29.1263 10.8733 29.213 11.2967 29.213 11.79C29.213 12.2433 29.123 12.6733 28.943 13.08C28.7696 13.48 28.523 13.8367 28.203 14.15C27.883 14.4567 27.503 14.7 27.063 14.88C26.623 15.06 26.1396 15.15 25.613 15.15C25.253 15.15 24.8996 15.1 24.553 15C24.213 14.9067 23.893 14.7667 23.593 14.58C23.293 14.3933 23.0196 14.17 22.773 13.91C22.533 13.65 22.3296 13.3533 22.163 13.02L22.703 12.75ZM33.5586 15H31.5786V0.669999H33.5586V15ZM34.9086 8.96L37.5386 5.4C37.7319 5.1 37.9753 4.87667 38.2686 4.73C38.5686 4.57667 38.9119 4.5 39.2986 4.5H40.6586L37.1186 9.3C37.0453 9.39333 36.9786 9.46333 36.9186 9.51C36.8586 9.55 36.8219 9.57333 36.8086 9.58C36.8219 9.59333 36.8586 9.62 36.9186 9.66C36.9786 9.7 37.0453 9.76667 37.1186 9.86L40.9286 15H39.5686C39.1819 15 38.8386 14.9267 38.5386 14.78C38.2453 14.6267 38.0019 14.4 37.8086 14.1L34.9086 10.2C34.8219 10.0867 34.7353 9.99333 34.6486 9.92C34.5686 9.84 34.4919 9.77667 34.4186 9.73C34.3519 9.68333 34.2953 9.65 34.2486 9.63C34.2019 9.60333 34.1753 9.58667 34.1686 9.58C34.1753 9.58 34.2019 9.57 34.2486 9.55C34.2953 9.53 34.3519 9.49667 34.4186 9.45C34.4919 9.40333 34.5686 9.34 34.6486 9.26C34.7353 9.18 34.8219 9.08 34.9086 8.96Z" fill="white"/>
                </svg>
              </Link>
            </div>
            <div className={styles.menu}>
              <button disabled={disabled} onClick={handleMenu}>
                <svg width="32" height="11" viewBox="0 0 32 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={`${styles.close_menu} ${ styles.closed}`}
                 >
                  <path d="M1 1H31" stroke="black" strokeLinecap="round"
                  className={`${styles.line} ${styles.line1_active}`}/>
                  <path className={`${styles.line} ${ styles.line2_active}`} d="M1 10H31" stroke="black" strokeLinecap="round"/>
                </svg>
              </button>
              
            </div>
          
        </div>
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
                      to='/'>
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
                      to='/register'>
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
