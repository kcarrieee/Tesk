import React from 'react';
import styles from './Footer.module.scss';
import Text from '../Text/Text';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_col}>
          <Text tag='h3'>Обретите <br /> спокойствие <br /> с Tesk</Text>
          <ul>
            <li> <Link to='/opportunities'> Возможности </Link></li>
            <li> <Link to='/about'> О приложении </Link></li>
            <li><Link to='/contact'> Контакты </Link></li>
          </ul>
          <ul>
            <li> <Link to='/privacy'> Пользовательское соглашение </Link></li>
            <li><Link to='/privacy'> Обработка персональных данных </Link></li>
          </ul>
        </div>
        <div className={styles.footer_col2}>
          <p className={styles.footer_col2_copy}>© 2023 Tesk</p>
          <div>
          <p>8 (954) xxx xx xx</p>
          <p>tesk@gmail.ru</p>
          <p>supporttesk@gmail.ru</p></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;