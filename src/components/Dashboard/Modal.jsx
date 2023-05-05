import React from 'react';
import styles from './style.module.scss';
import Text from '../Shared/Text/Text';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Modal = ({setIsModalOpen}) => {
    // Current signed-in user to delete
    const auth = getAuth();
    const user = auth.currentUser; 
    const navigate = useNavigate();

    const handleDelete = () => {
        try {
            user.delete()
            navigate('/register')

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={styles.modal}
    >
        <div>
            <svg onClick={() => setIsModalOpen(false)}
            width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31.7897" height="31.79" rx="15.8948" fill="white"/>
            <path d="M12 12.0004L20.7896 20.79" stroke="black" stroke-linecap="round"/>
            <path d="M11.9999 20.7897L20.7896 12.0001" stroke="black" stroke-linecap="round"/>
            <rect x="0.5" y="0.5" width="31.7897" height="31.79" rx="15.8948" stroke="#EAECEE"/>
            </svg>
            <Text tag='h3'>Вы уверены что хотите удалить Аккаунт? <br />
            После удаления вы не сможете вернуться в своим проктам :(</Text>
            <button onClick={handleDelete}>удалить</button>
        </div>
    </div>
  )
}

export default Modal;