import React from 'react';
import styles from './Button.module.css';
// import Link from 'react'


const Button = ({children, color, type, link, className, onClick, ...props}) => {
  
  return (
    <>
          <button 
              type={type}
              className={`${styles.unbutton} ${color === 'black' ? styles.black : styles.red}`}
              onClick={onClick}
              {...props}
          >{children}
          </button>
       
    </>
  );
}

export default Button;