import React from 'react';
import Text from '../Shared/Text/Text';
import styles from './Contact.module.css';
import Modal from './Modal/Modal';

const Page = () => {
  return (
    <section className={`container ${styles.section}`}> 
    <div className={styles.contact_adress}>
      <Text tag='p' color='gray'>Электронный адрес</Text>
      <div className={styles.contact_adress_list}>
        <ul>
          <li><Text tag='h3'>tesk@gmail.ru</Text></li>
          <li><Text tag='h3'>supporttesk@gmail.ru</Text></li>
          <li><Text tag='h3'>8 (954) xxx xx xx </Text></li>
        </ul>
      </div>
    </div>
     <Modal/>
    </section>
  );
}

export default Page;