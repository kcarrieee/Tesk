import React, { useState } from 'react';
import styles from './styles.module.scss';
import Text from '../Shared/Text/Text';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import image from '../../assets/forgotpass.png'


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {

      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
      toast.success('Email был отправлен')
      
    } catch (error) {
      toast.error('Не получилось отправить Email')
    }
  }
  return (
      <section className={`containerr ${styles.section}`}>
      <form onSubmit={onSubmit} className={styles.forgot_password}>
        <Text tag='h1'>Забыли пароль?</Text>
        <Text tag='p'>Письмо с подтверждением прийдет на почту, создайте новый пароль использую ссылку в письме.</Text>
       <div className='input_group'>
            <input 
                type='text' 
                required
                id='email'
                autoComplete='off'
                className='focus:ring-0 placeholder-[#A7A7A7]'
                placeholder='Электронная почта'
                value={email}
                onChange={onChange} 
                />
          </div>
          <button className={styles.btn}>сбросить пароль</button>
          <p className={styles.desc_link}><Link to='/login'>Войти</Link></p>
      </form>
      <div className='flex items-center align-center ml-24'>
        <img src={image} alt="info" width={350} className={styles.forgot_password_image}/>
      </div>
    </section>
  )
}

export default ForgotPassword