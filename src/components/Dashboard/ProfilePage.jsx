import React, { useState, useEffect } from 'react';
import FilterSearch from './Main/FilterSearch';
import MainSidebar from './Main/MainSidebar';
import styles from './Main/style.module.scss';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc, getDoc} from 'firebase/firestore';
import { db } from '../../firebase.config';
import { toast } from 'react-toastify';
import Modal from './Modal';
import SkeletonProfile from '../Shared/Preloader/SkeletonProfile';

const ProfilePage = () => {
    const auth = getAuth();
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
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
    
    useEffect(() => {
        const fetchInfo = async ()=> {
        const userRef = doc(db, 'users', auth.currentUser.uid);
            try {

                const docSnap = await getDoc(userRef);
                const data = docSnap.data();
                setformData((prevState) => ({
                    ...prevState,
                    image: data.image,
                    userInfo: data.userInfo,
                    username: data.username
                }))
                setLoading(false)
                
            } catch (error) {
                toast.error('Страница не загружается')
            }
        }
        fetchInfo();
    }, []);

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
            username,
            image
          })
       
        }
        toast.success('Данные обновлены')
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

    // if (loading) {
    //     return (
    //         <SkeletonProfile/>
    //     )
    // }

  return (
     <div>
        <FilterSearch/>
        <div className={styles.main}>
            <MainSidebar/>
      <div className='bg-white rounded-xl p-4 mb-40 md:p-10'>
      <div className='flex justify-between gap-4 mb-6 items-start sm:items-center'>
        <h3 className=' text-lg md:text-2xl'>Здравствуйте, {name} !</h3>
        <div className='flex gap-4 items-center'>
          <button className='logout' onClick={onLogout}>Выйти</button>
          <button onClick={() => setIsModalOpen(true)}><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="34.75" height="35.75" rx="17.375" fill="white"/>
            <path d="M23.375 14H12.375C12.2755 14 12.1802 14.0395 12.1098 14.1098C12.0395 14.1802 12 14.2755 12 14.375C12 14.4745 12.0395 14.5698 12.1098 14.6402C12.1802 14.7105 12.2755 14.75 12.375 14.75H13V23.875C13 24.1071 13.0922 24.3296 13.2563 24.4937C13.4204 24.6578 13.6429 24.75 13.875 24.75H21.875C22.1071 24.75 22.3296 24.6578 22.4937 24.4937C22.6578 24.3296 22.75 24.1071 22.75 23.875V14.75H23.375C23.4745 14.75 23.5698 14.7105 23.6402 14.6402C23.7105 14.5698 23.75 14.4745 23.75 14.375C23.75 14.2755 23.7105 14.1802 23.6402 14.1098C23.5698 14.0395 23.4745 14 23.375 14ZM22 23.875C22 23.9082 21.9868 23.9399 21.9634 23.9634C21.9399 23.9868 21.9082 24 21.875 24H13.875C13.8418 24 13.8101 23.9868 13.7866 23.9634C13.7632 23.9399 13.75 23.9082 13.75 23.875V14.75H22V23.875ZM15 12.375C15 12.2755 15.0395 12.1802 15.1098 12.1098C15.1802 12.0395 15.2755 12 15.375 12H20.375C20.4745 12 20.5698 12.0395 20.6402 12.1098C20.7105 12.1802 20.75 12.2755 20.75 12.375C20.75 12.4745 20.7105 12.5698 20.6402 12.6402C20.5698 12.7105 20.4745 12.75 20.375 12.75H15.375C15.2755 12.75 15.1802 12.7105 15.1098 12.6402C15.0395 12.5698 15 12.4745 15 12.375Z" fill="black"/>
            <rect x="0.5" y="0.5" width="34.75" height="35.75" rx="17.375" stroke="#EAECEE"/>
            </svg>
        </button>
        </div>
    </div>

    {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/> }
    <div className='flex gap-4 md:gap-10  '>
      <div className='profile_details '>
        {image ?  <img src={image} alt="profile-pic" style={{width:'100px', borderRadius: 100, marginTop:15}}/> :
        <svg  style={{marginTop:15}}
        width="100" height="100" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39" cy="39" r="39" fill="#D3D3D3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.026 45.9643C37.4752 45.3143 40.5387 45.3702 44.9938 45.9871C45.3164 46.0339 45.6112 46.1958 45.8238 46.443C46.0363 46.6902 46.1522 47.0059 46.1501 47.3319C46.1501 47.6439 46.0429 47.9468 45.8492 48.1834C45.5116 48.5959 45.1657 49.0016 44.8118 49.4002H46.5284C46.6363 49.2715 46.7449 49.1402 46.8547 49.007C47.2403 48.5342 47.4506 47.9427 47.4501 47.3326C47.4501 46.0163 46.4894 44.8821 45.1719 44.7001C40.6115 44.069 37.4239 44.0085 32.8382 44.6786C31.507 44.873 30.5502 46.0248 30.5502 47.3501C30.5502 47.9384 30.7419 48.5201 31.1053 48.9914C31.2125 49.1305 31.3185 49.267 31.4238 49.4009H33.0988C32.7695 49.0067 32.4484 48.6058 32.1355 48.1984C31.9496 47.9545 31.8493 47.6561 31.8502 47.3495C31.8502 46.6494 32.3533 46.0625 33.026 45.9643ZM39.0001 39.6503C39.5123 39.6503 40.0194 39.5494 40.4926 39.3534C40.9658 39.1574 41.3957 38.8701 41.7579 38.508C42.12 38.1458 42.4073 37.7159 42.6033 37.2427C42.7993 36.7696 42.9001 36.2624 42.9001 35.7503C42.9001 35.2381 42.7993 34.731 42.6033 34.2578C42.4073 33.7846 42.12 33.3547 41.7579 32.9926C41.3957 32.6304 40.9658 32.3432 40.4926 32.1472C40.0194 31.9512 39.5123 31.8503 39.0001 31.8503C37.9658 31.8503 36.9738 32.2612 36.2424 32.9926C35.511 33.724 35.1002 34.7159 35.1002 35.7503C35.1002 36.7846 35.511 37.7766 36.2424 38.508C36.9738 39.2394 37.9658 39.6503 39.0001 39.6503ZM39.0001 40.9503C40.3793 40.9503 41.7019 40.4024 42.6771 39.4272C43.6523 38.452 44.2001 37.1294 44.2001 35.7503C44.2001 34.3712 43.6523 33.0485 42.6771 32.0733C41.7019 31.0981 40.3793 30.5503 39.0001 30.5503C37.621 30.5503 36.2984 31.0981 35.3232 32.0733C34.348 33.0485 33.8002 34.3712 33.8002 35.7503C33.8002 37.1294 34.348 38.452 35.3232 39.4272C36.2984 40.4024 37.621 40.9503 39.0001 40.9503Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39 50.6999C45.4616 50.6999 50.6999 45.4616 50.6999 39C50.6999 32.5383 45.4616 27.3 39 27.3C32.5383 27.3 27.3 32.5383 27.3 39C27.3 45.4616 32.5383 50.6999 39 50.6999ZM39 51.9999C46.1798 51.9999 51.9999 46.1798 51.9999 39C51.9999 31.8201 46.1798 26 39 26C31.8201 26 26 31.8201 26 39C26 46.1798 31.8201 51.9999 39 51.9999Z" fill="white"/>
        </svg>
            }
      </div>
      <div className='w-full '>
         <p className='cursor-pointer flex justify-end' onClick={()=> {
          changeDetails && onSubmit()
          setChangeDetails((prev) => !prev)
          }} >{changeDetails ? <svg className='mb-2'
          width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="29" height="29.5188" rx="14.5" fill="white"/>
            <path d="M13.5675 18.5188C13.4897 18.5188 13.4168 18.5065 13.3488 18.482C13.2807 18.4575 13.2175 18.4163 13.1592 18.3583L10.6508 15.85C10.5439 15.7431 10.4928 15.6044 10.4974 15.4341C10.5021 15.2637 10.5581 15.1253 10.6654 15.0188C10.7724 14.9118 10.9085 14.8583 11.0738 14.8583C11.239 14.8583 11.3751 14.9118 11.4821 15.0188L13.5675 17.1042L18.5113 12.1604C18.6182 12.0535 18.7568 12 18.9272 12C19.0975 12 19.236 12.0535 19.3425 12.1604C19.4495 12.2674 19.5029 12.406 19.5029 12.5763C19.5029 12.7467 19.4495 12.8851 19.3425 12.9917L13.9758 18.3583C13.9175 18.4167 13.8543 18.4581 13.7863 18.4826C13.7182 18.5071 13.6453 18.5191 13.5675 18.5188Z" fill="black"/>
            <rect x="0.5" y="0.5" width="29" height="29.5188" rx="14.5" stroke="#EAECEE"/>
            </svg>
            : <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="32" height="32" rx="16" fill="white"/>
            <path d="M17.61 13.1103L18.4053 12.3149C18.5051 12.2151 18.6236 12.1359 18.754 12.0819C18.8845 12.0278 19.0242 12 19.1654 12C19.3066 12 19.4464 12.0278 19.5768 12.0819C19.7072 12.1359 19.8257 12.2151 19.9255 12.3149L20.6853 13.0748C20.8868 13.2763 21 13.5497 21 13.8347C21 14.1196 20.8868 14.393 20.6853 14.5945L19.89 15.3898M17.61 13.1103L12.4428 18.2772C12.2643 18.4556 12.1544 18.6911 12.1322 18.9424L12.0021 20.4149C11.9951 20.4931 12.0054 20.572 12.0322 20.6459C12.059 20.7197 12.1017 20.7868 12.1572 20.8424C12.2128 20.898 12.2798 20.9408 12.3537 20.9676C12.4275 20.9945 12.5063 21.0048 12.5846 20.9979L14.057 20.8679C14.3087 20.8459 14.5446 20.7359 14.7233 20.5573L19.89 15.3898M17.61 13.1103L19.89 15.3898" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="0.5" y="0.5" width="32" height="32" rx="16" stroke="#EAECEE"/>
            </svg>
        }</p>
        {loading ? <SkeletonProfile/> :
        <form className='flex flex-col gap-6 w-full '>
          <div className='flex flex-col'>
            <input type="text" id='name' className={!changeDetails ? 'border-0 ring-0 p-1 text-md md:text-xl text-black' : 'focus:ring-black  border-gray-400 rounded-md'}
            disabled={!changeDetails}
            value={name}
            onChange={onChange}/>
            <input type="text" id='username' className={!changeDetails ? 'border-0 ring-0 text-[#515357] p-1' : 'focus:ring-black focus:border-0 border-gray-400 rounded-md mt-2'}
            disabled={!changeDetails}
            value={username}
            onChange={onChange}/>
          </div>
          <div>
          <label htmlFor="userInfo" className='text-md md:text-xl '>Общая информация</label>
          <textarea type="text" id='userInfo' className={!changeDetails ? 'border-0 ring-0 w-full textArea p-1 text-[#515357]': ' focus:ring-0 focus:border-black border-gray-400 rounded-md mt-2 w-full'}
          disabled={!changeDetails}
          placeholder={!userInfo && 'Расскажите про себя'}
          value={userInfo}
          onChange={onChange}/>
          </div>
          <div>
          <label htmlFor="email" className=' text-md md:text-xl '>Электронная почта</label>
           <input type="text" id='email' disabled value={email} className='border-0 ring-0 block p-1 text-[#515357]'
          />
          </div>
        </form>
        }
      </div>
      </div>
        </div>
          </div>
            </div>
  )
}

export default ProfilePage;