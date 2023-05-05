import React from 'react';
import styles from './style.module.scss';

const Badge = ({ type }) => {
  switch (type) {
    case 'new':
      return <span className={styles.new}>новый</span>;
    case 'process':
      return <span className={styles.process}>в процессе</span>;
    case 'done':
      return <span className={styles.done}>завершен</span>;
    case 'archive':
        return <span className={styles.archive}>в архиве</span>;
    default: 
      return <></>;
  }
}

export default Badge;