import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate }from 'react-router-dom';
import Text from '../Shared/Text/Text';
import { Link } from 'react-router-dom';
import OAuth from './OAuth';
import { toast } from 'react-toastify';
import image from '../../assets/log.png'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });



  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState)=>(
      {...prevState,
      [e.target.id]: e.target.value
      }))
  }

   const onSubmit= async(e) => {
    e.preventDefault()

    try {
      const auth = getAuth()
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate('/dashboard')
      }
    } catch(error){
      console.log(error)
      toast.error('Что-то не так, попробуйте снова')
    }
  }
  return (
     <section className={`containerr ${styles.section}`}>
      <div>
        <Text tag='h1'>Войти</Text>
        <OAuth/>
        <form autoComplete="off" onSubmit={onSubmit}>
       <div className='input_group'>
            <input 
                type='text' 
                required
                id='email'
                className='margin-input focus:ring-0 placeholder-[#A7A7A7]'
                autoComplete="false"
                placeholder='E-mail' 
                value={email} 
                onChange={onChange}
                />
                 <div className={styles.pass_input}>
                   <input 
                    type={showPassword ? 'text': 'password'}
                    required
                    id='password'
                    autoComplete="off"
                    className='margin-input focus:ring-0 placeholder-[#A7A7A7]'
                    placeholder='Пароль'
                    value={password}
                    onChange={onChange}
                    />
                  <svg 
                  onClick={()=>{setShowPassword((prev) => !prev)}}
                  width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="#B2B2B2"/>
                  </svg>
                </div>
                
          </div>
          <button className={styles.btn}>войти</button>
          </form>
          <p className={styles.desc_link}><Link to='/forgot-password'>Забыли пароль?</Link></p>
          <p className={styles.desc}>Нажимая кнопку «Войти» вы принимаете условия <span> Политики Конфиденциальности </span></p>
          <p className={styles.desc_link}>Есть аккаунт? <Link to='/register'>Зарегетрироваться</Link> </p>
      </div>
      <div className={styles.spline_col}>
      <img className={styles.login_image} src={image} alt="iphone" width={'90%'} style={{marginTop: 10}}/>
      </div>
    </section>
  )
}

export default LogIn