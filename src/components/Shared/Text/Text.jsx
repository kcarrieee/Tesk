import React from 'react';
import styles from './Text.module.css';


const Text = ({tag, children, color, className, ...props}) => {
  switch (tag){
    case 'h1':
      return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`${styles.h1} ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`${styles.h3} ${color === 'gray' && styles.text_gray} ${className}`}>{children}</h3>;
    case 'p':
        return <p className={`${styles.p} ${className} ${color === 'gray' && styles.text_gray}`}>{children}</p>;
    default: 
      return <></>;
  }
};

export default Text;