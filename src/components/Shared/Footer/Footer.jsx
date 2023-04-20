import React from 'react';
import styles from './Footer.module.scss';
import Text from '../Text/Text';
// import { navLinks } from '../Navbar/Links';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer} data-scroll-section>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_col}>
          <Text tag='h3'>Обретите <br /> спокойствие <br /> с Tesk</Text>
          <ul>
            <li> Возможности</li>
            <li> О приложении</li>
            <li> Контакты</li>
          </ul>
          <ul>
            <li> Пользовательское соглашение</li>
            <li> Обработка персональных данных</li>
          </ul>
        </div>
        <div className={styles.footer_col2}>
          <p className={styles.footer_col2_copy}>© 2023 Tesk</p>
          <div><p>8 (954) xxx xx xx</p>
          <p>tesk@gmail.ru</p>
          <p>supporttesk@gmail.ru</p></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;