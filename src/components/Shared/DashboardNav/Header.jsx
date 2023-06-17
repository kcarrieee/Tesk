import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardNav.module.scss';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { useContext } from 'react';
import { PomodoroContext } from '../../../context/PomodoroContext';
import Pomodoro from '../../Dashboard/Main/Pomodoro/Pomodoro';


const Header = ({ page }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const { isopen , setIsopen } = useContext(PomodoroContext)

  const onLogout = () => {
      auth.signOut()
      navigate('/')
    }
     const [imageLink, setImage] = useState({
        image: '',
      });
      const { image } = imageLink;

     useEffect(() => {
        const fetchInfo = async ()=> {
        const userRef = doc(db, 'users', auth.currentUser.uid);
            try {
                const docSnap = await getDoc(userRef);
                const data = docSnap.data();
                setImage((prevState) => ({
                    ...prevState,
                    image: data.image,
                }))
                
            } catch (error) {
                console.log(error)
            }
        }
    fetchInfo();
       
    }, [auth.currentUser.uid]);


  return (
    <>
    <header className={styles.header}>
      <h1>{page}</h1>
      <div className={styles.header__rightcol}>
        <button  className={styles.header__addBtn}>
          <div>
          <p>добавить проект </p> 
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6666 8.66659H8.66665V12.6666H7.33331V8.66659H3.33331V7.33325H7.33331V3.33325H8.66665V7.33325H12.6666V8.66659Z" fill="white"/>
          </svg>
          </div>
        </button>

       <div onClick={onLogout}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#EAECEE"/>
        <path d="M20 20.4286H25M25 20.4286L22.8571 22.5714M25 20.4286L22.8571 18.2857M25 
        16.1429V15.4286C25 15.0497 24.8495 14.6863 24.5816 14.4184C24.3137 14.1505 23.9503 14 
        23.5714 14H16.4286C16.0497 14 15.6863 14.1505 15.4184 14.4184C15.1505 14.6863 15 15.0497 
        15 15.4286V25.4286C15 25.8075 15.1505 26.1708 15.4184 26.4387C15.6863 26.7066 16.0497 
        26.8571 16.4286 26.8571H23.5714C23.9503 26.8571 24.3137 26.7066 24.5816 26.4387C24.8495 
        26.1708 25 25.8075 25 25.4286V24.7143" stroke="black" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <div onClick={()=> setIsopen(true)}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
        <path d="M20 27.5C23.3137 27.5 26 24.8137 26 21.5C26 18.1863 23.3137 15.5 20 15.5C16.6863 15.5 14 18.1863 14 21.5C14 24.8137 16.6863 27.5 20 27.5Z" stroke="black"/>
        <path d="M21.5 12.5H18.5M20 12.5V15.5M24.125 17L25.25 15.875M20 19.25V21.5H17.75" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#EAECEE"/>
        </svg>
        </div>
        <Link to='/profile'>
        <div className={styles.pic}>
          {  image ?
                <img src={image} alt="profile-pic" style={{width:'100px', borderRadius: 100}}/>
              : auth.currentUser.photoURL ?
                <img src={auth.currentUser.photoURL}  alt="photoURL" style={{width:'100px', borderRadius: 100}}/>
              : <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#D3D3D3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.9364 23.5716C19.2181 23.2383 20.7891 23.267 23.0737 23.5833C23.2392 23.6073 23.3904 23.6903 23.4994 23.8171C23.6084 23.9439 23.6678 24.1058 23.6667 24.273C23.6667 24.433 23.6117 24.5883 23.5124 24.7096C23.3393 24.9212 23.1619 25.1292 22.9804 25.3336H23.8607C23.9161 25.2676 23.9717 25.2003 24.0281 25.132C24.2258 24.8895 24.3336 24.5862 24.3334 24.2733C24.3334 23.5983 23.8407 23.0166 23.1651 22.9233C20.8264 22.5996 19.1917 22.5686 16.8401 22.9123C16.1574 23.012 15.6667 23.6026 15.6667 24.2823C15.6667 24.584 15.7651 24.8823 15.9514 25.124C16.0064 25.1953 16.0607 25.2653 16.1147 25.334H16.9737C16.8049 25.1318 16.6402 24.9262 16.4797 24.7173C16.3844 24.5922 16.333 24.4392 16.3334 24.282C16.3334 23.923 16.5914 23.622 16.9364 23.5716ZM20.0001 20.3336C20.2627 20.3336 20.5228 20.2819 20.7654 20.1814C21.0081 20.0809 21.2286 19.9336 21.4143 19.7479C21.6 19.5621 21.7473 19.3417 21.8478 19.099C21.9483 18.8564 22.0001 18.5963 22.0001 18.3337C22.0001 18.071 21.9483 17.8109 21.8478 17.5683C21.7473 17.3256 21.6 17.1052 21.4143 16.9194C21.2286 16.7337 21.0081 16.5864 20.7654 16.4859C20.5228 16.3854 20.2627 16.3337 20.0001 16.3337C19.4696 16.3337 18.9609 16.5444 18.5859 16.9194C18.2108 17.2945 18.0001 17.8032 18.0001 18.3337C18.0001 18.8641 18.2108 19.3728 18.5859 19.7479C18.9609 20.1229 19.4696 20.3336 20.0001 20.3336ZM20.0001 21.0003C20.7073 21.0003 21.3856 20.7194 21.8857 20.2193C22.3858 19.7192 22.6667 19.0409 22.6667 18.3337C22.6667 17.6264 22.3858 16.9481 21.8857 16.448C21.3856 15.9479 20.7073 15.667 20.0001 15.667C19.2928 15.667 18.6146 15.9479 18.1145 16.448C17.6144 16.9481 17.3334 17.6264 17.3334 18.3337C17.3334 19.0409 17.6144 19.7192 18.1145 20.2193C18.6146 20.7194 19.2928 21.0003 20.0001 21.0003Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 26.0001C23.3137 26.0001 26 23.3138 26 20.0001C26 16.6865 23.3137 14.0002 20 14.0002C16.6864 14.0002 14 16.6865 14 20.0001C14 23.3138 16.6864 26.0001 20 26.0001ZM20 26.6668C23.682 26.6668 26.6667 23.6821 26.6667 20.0001C26.6667 16.3182 23.682 13.3335 20 13.3335C16.318 13.3335 13.3334 16.3182 13.3334 20.0001C13.3334 23.6821 16.318 26.6668 20 26.6668Z" fill="white"/>
                </svg>
            }
        </div>
        </Link>
      </div>
    </header>
     {isopen && <Pomodoro/>}
     </>
  )
}

export default Header;