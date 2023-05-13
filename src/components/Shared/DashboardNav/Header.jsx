import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardNav.module.scss';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../../firebase.config';

const Header = ({ page }) => {
  const auth = getAuth();
  const navigate = useNavigate();

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
        <path d="M20 20.4286H25M25 20.4286L22.8571 22.5714M25 20.4286L22.8571 18.2857M25 16.1429V15.4286C25 15.0497 24.8495 14.6863 24.5816 14.4184C24.3137 14.1505 23.9503 14 23.5714 14H16.4286C16.0497 14 15.6863 14.1505 15.4184 14.4184C15.1505 14.6863 15 15.0497 15 15.4286V25.4286C15 25.8075 15.1505 26.1708 15.4184 26.4387C15.6863 26.7066 16.0497 26.8571 16.4286 26.8571H23.5714C23.9503 26.8571 24.3137 26.7066 24.5816 26.4387C24.8495 26.1708 25 25.8075 25 25.4286V24.7143" stroke="black" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        <div>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
          <g clip-path="url(#clip0_78_2299)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3333 18.6667C15.3333 17.7826 15.6845 16.9348 16.3096 16.3096C16.9348 15.6845 17.7826 15.3333 18.6667 15.3333C19.5507 15.3333 20.3986 15.6845 21.0237 16.3096C21.6488 16.9348 22 17.7826 22 18.6667C22 19.5507 21.6488 20.3986 21.0237 21.0237C20.3986 21.6488 19.5507 22 18.6667 22C17.7826 22 16.9348 21.6488 16.3096 21.0237C15.6845 20.3986 15.3333 19.5507 15.3333 18.6667ZM18.6667 14C17.9275 14 17.1989 14.1756 16.5409 14.5123C15.8829 14.849 15.3143 15.3372 14.8818 15.9367C14.4494 16.5362 14.1656 17.2298 14.0538 17.9604C13.9419 18.6911 14.0052 19.4378 14.2384 20.1392C14.4717 20.8406 14.8682 21.4766 15.3953 21.9947C15.9225 22.5129 16.5651 22.8984 17.2704 23.1196C17.9757 23.3407 18.7235 23.3912 19.4521 23.2668C20.1807 23.1424 20.8694 22.8467 21.4613 22.404L24.8613 25.8047C24.9863 25.9298 25.1559 26.0001 25.3328 26.0001C25.5096 26.0002 25.6792 25.93 25.8043 25.805C25.9294 25.68 25.9997 25.5104 25.9998 25.3336C25.9999 25.1567 25.9297 24.9871 25.8047 24.862L22.4047 21.462C22.9235 20.7683 23.2391 19.9439 23.3161 19.0811C23.393 18.2183 23.2282 17.3511 22.8403 16.5765C22.4523 15.802 21.8564 15.1508 21.1193 14.6957C20.3821 14.2407 19.5329 13.9998 18.6667 14Z" fill="black"/>
          </g>
          <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#EAECEE"/>
          <defs>
          <clipPath id="clip0_78_2299">
          <rect width="16" height="16" fill="white" transform="translate(12 12)"/>
          </clipPath>
        </defs>
        </svg>
        </div>
        <Link to='/profile'>
        <div className={styles.pic}>
          {  image ?
         <img src={image} alt="profile-pic" style={{width:'100px', borderRadius: 100}}/>
              : <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#D3D3D3"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9364 23.5716C19.2181 23.2383 20.7891 23.267 23.0737 23.5833C23.2392 23.6073 23.3904 23.6903 23.4994 23.8171C23.6084 23.9439 23.6678 24.1058 23.6667 24.273C23.6667 24.433 23.6117 24.5883 23.5124 24.7096C23.3393 24.9212 23.1619 25.1292 22.9804 25.3336H23.8607C23.9161 25.2676 23.9717 25.2003 24.0281 25.132C24.2258 24.8895 24.3336 24.5862 24.3334 24.2733C24.3334 23.5983 23.8407 23.0166 23.1651 22.9233C20.8264 22.5996 19.1917 22.5686 16.8401 22.9123C16.1574 23.012 15.6667 23.6026 15.6667 24.2823C15.6667 24.584 15.7651 24.8823 15.9514 25.124C16.0064 25.1953 16.0607 25.2653 16.1147 25.334H16.9737C16.8049 25.1318 16.6402 24.9262 16.4797 24.7173C16.3844 24.5922 16.333 24.4392 16.3334 24.282C16.3334 23.923 16.5914 23.622 16.9364 23.5716ZM20.0001 20.3336C20.2627 20.3336 20.5228 20.2819 20.7654 20.1814C21.0081 20.0809 21.2286 19.9336 21.4143 19.7479C21.6 19.5621 21.7473 19.3417 21.8478 19.099C21.9483 18.8564 22.0001 18.5963 22.0001 18.3337C22.0001 18.071 21.9483 17.8109 21.8478 17.5683C21.7473 17.3256 21.6 17.1052 21.4143 16.9194C21.2286 16.7337 21.0081 16.5864 20.7654 16.4859C20.5228 16.3854 20.2627 16.3337 20.0001 16.3337C19.4696 16.3337 18.9609 16.5444 18.5859 16.9194C18.2108 17.2945 18.0001 17.8032 18.0001 18.3337C18.0001 18.8641 18.2108 19.3728 18.5859 19.7479C18.9609 20.1229 19.4696 20.3336 20.0001 20.3336ZM20.0001 21.0003C20.7073 21.0003 21.3856 20.7194 21.8857 20.2193C22.3858 19.7192 22.6667 19.0409 22.6667 18.3337C22.6667 17.6264 22.3858 16.9481 21.8857 16.448C21.3856 15.9479 20.7073 15.667 20.0001 15.667C19.2928 15.667 18.6146 15.9479 18.1145 16.448C17.6144 16.9481 17.3334 17.6264 17.3334 18.3337C17.3334 19.0409 17.6144 19.7192 18.1145 20.2193C18.6146 20.7194 19.2928 21.0003 20.0001 21.0003Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 26.0001C23.3137 26.0001 26 23.3138 26 20.0001C26 16.6865 23.3137 14.0002 20 14.0002C16.6864 14.0002 14 16.6865 14 20.0001C14 23.3138 16.6864 26.0001 20 26.0001ZM20 26.6668C23.682 26.6668 26.6667 23.6821 26.6667 20.0001C26.6667 16.3182 23.682 13.3335 20 13.3335C16.318 13.3335 13.3334 16.3182 13.3334 20.0001C13.3334 23.6821 16.318 26.6668 20 26.6668Z" fill="white"/>
                </svg>
            }
        </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;