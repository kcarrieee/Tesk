import React, { useEffect, useState }from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const Dashbord = () => {
    const auth = getAuth();
    // const userName = `user_${Math.random()}`;

    const [changeDetails, setChangeDetails] = useState(false);

     const [formData, setformData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        username: '',
        userInfo: null,
        image: '',
      });

  
    const {name, email, username, userInfo, image} = formData;

    const navigate = useNavigate();

    const onLogout = () => {
      auth.signOut()
      navigate('/')
    }
    const onSubmit = async () => {
      try {
        if(auth.currentUser.displayName !== name) {
          //update
          await updateProfile(auth.currentUser, {
            displayName: name,
          })

          //update in Firestore
          const userRef = doc(db, 'users', auth.currentUser.uid)
          await updateDoc(userRef, {
            name,
            userInfo,
            username
          })
       
        }
      } catch (error) {
        toast.error('Не получилось обновить данные')
      }

    }
    const onChange = (e) => {

      setformData((prevState) => ({
        ...prevState,
        [e.target.id]:e.target.value
      }))
    }

  return (
    <div className='profile'>
      <button className='logout' onClick={onLogout}>log out</button>
      <div className='profile_details'>
        <p onClick={()=> {
          changeDetails && onSubmit()
          setChangeDetails((prev) => !prev)
          }} >{changeDetails ? 'сохранить' : 'изменить'}</p>
      </div>
      <div>
        <form>
          <input type="text" id='name' className={!changeDetails ? 'profileName' : 'profileNameactive'}
          disabled={!changeDetails}
          value={name}
          onChange={onChange}/>
           <input type="text" id='email' value={email}
          />
           <input type="text" id='username'
          disabled={!changeDetails}
          value={username}
          onChange={onChange}/>
          <input type="text" id='userInfo'
          disabled={!changeDetails}
          value={userInfo}
          onChange={onChange}/>
          <input type="file" name="image" id="image" />
        </form>
      </div>
    </div>
  )
}

export default Dashbord