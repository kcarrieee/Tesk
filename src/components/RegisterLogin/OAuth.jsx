import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { toast } from 'react-toastify';

const OAuth = () => {
  const navigate = useNavigate()

  const onGoogleAuth = async () =>{
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      //check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      //if user doesn't exists create user in db
      if(!docSnap.exists()) {

        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
          userInfo: '',
          image: '',
          username: '',
        })

      }
      //navigating back to home
      navigate('/dashbord')
      
    } catch (error) {
      toast.error('Не получилось войти, попробуйте снова')
        
    }

  }
  return (
    <button className={styles.btn_google} onClick={onGoogleAuth}>Продолжить через Google</button>
  )
}

export default OAuth