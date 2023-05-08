import React from 'react';
import Text from '../Shared/Text/Text';
import styles from './Contact.module.css';
import Modal from './Modal/Modal';
import image from '../../assets/images/iphone.png';

const Page = () => {
  return (
    <>
    <div className='bg-[#F0F1F4] w-full'>
      <div className={`containerr ${styles.contact_main}`}>
      <h1>Свяжитесь с нами, <br /> если у Вас есть какие-либо вопросы или предложения.</h1>
      <img src={image} alt="phones" />
      </div>
    </div>
    <section className={`containerr ${styles.section}`}> 
    <div className={styles.contact_adress}>
      <Text tag='h3' color='gray' className={styles.adress_title}>Электронный адрес</Text>
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
    </>
  );
}

export default Page;