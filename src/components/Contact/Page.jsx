import React from 'react';
import Text from '../Shared/Text/Text';
import styles from './Contact.module.css';
import Modal from './Modal/Modal';
import HeaderText from '../Shared/Text/HeaderText';


const Page = () => {
  return (
    <>
    <div className='mt-12 mb-12 md:mt-24 md:mb-32 '>
      <div className={`containerr`}>
      <HeaderText
      blacktext='Свяжитесь с нами,'
      greytext1='если у Вас есть какие-то интересующие'
      greytext2='вопросы или деловые предложения'
      />
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