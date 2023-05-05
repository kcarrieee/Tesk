import { useNavigate, useLocation } from 'react-router-dom';
import styles from './DashboardNav.module.scss';
import { getAuth } from "firebase/auth";


const Sidebar = ({isOpen,setIsOpen}) => {
  const auth = getAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const matchRoute = (route) =>{
      if(route === location.pathname){
        return true;
      }
    }

    const handleClickBar=(url)=>{
      setIsOpen(false)
      navigate(`${url}`)

    }
    const onLogout = () => {
      auth.signOut()
      navigate('/')
    }
  return (
    <div className={`${isOpen ? `${styles.open}`: `${styles.sidebar}`}`}>
      <ul>
            <li className={`${styles.sidebar__link} ${matchRoute('/dashboard')? `${styles.active}` : ''}`} onClick={()=> handleClickBar('/dashboard')}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.66667 1H2.33333C1.97971 1 1.64057 1.14048 1.39052 1.39052C1.14048 1.64057 1 1.97971 1 2.33333V7.66667C1 8.02029 1.14048 8.35943 1.39052 8.60948C1.64057 8.85952 1.97971 9 2.33333 9H7.66667C8.02029 9 8.35943 8.85952 8.60948 8.60948C8.85952 8.35943 9 8.02029 9 7.66667V2.33333C9 1.97971 8.85952 1.64057 8.60948 1.39052C8.35943 1.14048 8.02029 1 7.66667 1ZM18.3333 1H13C12.6464 1 12.3072 1.14048 12.0572 1.39052C11.8071 1.64057 11.6667 1.97971 11.6667 2.33333V7.66667C11.6667 8.02029 11.8071 8.35943 12.0572 8.60948C12.3072 8.85952 12.6464 9 13 9H18.3333C18.687 9 19.0261 8.85952 19.2761 8.60948C19.5262 8.35943 19.6667 8.02029 19.6667 7.66667V2.33333C19.6667 1.97971 19.5262 1.64057 19.2761 1.39052C19.0261 1.14048 18.687 1 18.3333 1ZM18.3333 11.6667H13C12.6464 11.6667 12.3072 11.8071 12.0572 12.0572C11.8071 12.3072 11.6667 12.6464 11.6667 13V18.3333C11.6667 18.687 11.8071 19.0261 12.0572 19.2761C12.3072 19.5262 12.6464 19.6667 13 19.6667H18.3333C18.687 19.6667 19.0261 19.5262 19.2761 19.2761C19.5262 19.0261 19.6667 18.687 19.6667 18.3333V13C19.6667 12.6464 19.5262 12.3072 19.2761 12.0572C19.0261 11.8071 18.687 11.6667 18.3333 11.6667ZM7.66667 11.6667H2.33333C1.97971 11.6667 1.64057 11.8071 1.39052 12.0572C1.14048 12.3072 1 12.6464 1 13V18.3333C1 18.687 1.14048 19.0261 1.39052 19.2761C1.64057 19.5262 1.97971 19.6667 2.33333 19.6667H7.66667C8.02029 19.6667 8.35943 19.5262 8.60948 19.2761C8.85952 19.0261 9 18.687 9 18.3333V13C9 12.6464 8.85952 12.3072 8.60948 12.0572C8.35943 11.8071 8.02029 11.6667 7.66667 11.6667Z" stroke="black"/>
              </svg>
            </li>
           
            <li className={`${styles.sidebar__link} ${matchRoute('/important-projects')? `${styles.activeLink}` : ''}`}  onClick={()=> handleClickBar('/important-projects')} >
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7647 0H1.23529C0.907674 0 0.593472 0.128403 0.361809 0.356963C0.130147 0.585523 0 0.895517 0 1.21875V19.0938C3.65633e-05 19.1663 0.0197379 19.2374 0.0570593 19.2999C0.0943808 19.3623 0.147962 19.4138 0.212244 19.4489C0.276526 19.4841 0.349165 19.5016 0.422624 19.4997C0.496083 19.4977 0.567685 19.4765 0.63 19.438L7 15.5106L13.371 19.438C13.4362 19.4783 13.5114 19.4997 13.5882 19.5C13.6581 19.4998 13.7267 19.4823 13.7879 19.4492C13.8522 19.414 13.9058 19.3625 13.9431 19.3C13.9804 19.2375 14 19.1663 14 19.0938V1.21875C14 0.895517 13.8699 0.585523 13.6382 0.356963C13.4065 0.128403 13.0923 0 12.7647 0ZM13.1765 18.3605L7.21721 14.687C7.15176 14.6466 7.07614 14.6252 6.99897 14.6252C6.9218 14.6252 6.84618 14.6466 6.78074 14.687L0.823529 18.3605V1.21875C0.823529 1.11101 0.866911 1.00767 0.944132 0.931488C1.02135 0.855301 1.12609 0.8125 1.23529 0.8125H12.7647C12.8739 0.8125 12.9786 0.855301 13.0559 0.931488C13.1331 1.00767 13.1765 1.11101 13.1765 1.21875V18.3605Z" fill="black"/>
                </svg>
            </li>
           <li className={`${styles.sidebar__link} ${matchRoute('/stats')? `${styles.active}` : ''}`}  onClick={()=> handleClickBar('/stats')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 19.3333H20M7.33333 16V8M12.6667 16V4M18 16V0M2 12V16" stroke="black"/>
              </svg>
            </li>
            <li  className={`${styles.sidebar__link} ${matchRoute('/archive')? `${styles.activeLink}` : ''}`}  onClick={()=> handleClickBar('/archive')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_223_539)">
                <path d="M3.33333 16.532L3.82667 16.084L3.81867 16.0747L3.80933 16.0653L3.33333 16.532ZM4.66667 18V18.6667H5.33333V18H4.66667ZM9.33333 19.3093L9.35733 18.6427L9.28667 19.976L9.33333 19.3093ZM10 10H9.33333C9.33318 10.0876 9.35029 10.1744 9.38369 10.2554C9.41709 10.3364 9.46613 10.41 9.528 10.472L10 10ZM18.6667 10C18.6667 11.1381 18.4425 12.2651 18.007 13.3166C17.5714 14.3681 16.933 15.3235 16.1283 16.1283C15.3235 16.933 14.3681 17.5714 13.3166 18.007C12.2651 18.4425 11.1381 18.6667 10 18.6667V20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10H18.6667ZM10 1.33333C11.1381 1.33333 12.2651 1.5575 13.3166 1.99304C14.3681 2.42858 15.3235 3.06697 16.1283 3.87174C16.933 4.67652 17.5714 5.63192 18.007 6.68341C18.4425 7.7349 18.6667 8.86188 18.6667 10H20C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V1.33333ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10H1.33333C1.33333 7.70146 2.24643 5.49706 3.87174 3.87174C5.49706 2.24643 7.70146 1.33333 10 1.33333V0ZM3.80933 16.0653C2.21941 14.4472 1.33001 12.2685 1.33333 10H0C0 12.724 1.09067 15.196 2.85733 16.9987L3.80933 16.0653ZM2.84 16.98L4.17333 18.448L5.16 17.552L3.82667 16.084L2.84 16.98ZM10 18.6667C9.79315 18.6668 9.58635 18.6597 9.38 18.6453L9.28667 19.9747C9.52267 19.992 9.76 20 10 20V18.6667ZM10.024 18.6667L9.35733 18.6427L9.30933 19.9773L9.976 20L10.024 18.6667ZM9.33333 4V10H10.6667V4H9.33333ZM9.528 10.472L13.528 14.472L14.472 13.528L10.472 9.528L9.528 10.472ZM0 18.6667H4.66667V17.3333H0V18.6667ZM5.33333 18V13.3333H4V18H5.33333Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_223_539">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </li>
            </ul>
            <div className={styles.footer_sidebar}>
              <p onClick={onLogout} >Выйти</p>
              <p>©2023 Tesk</p>
            </div>
            </div>
  )
}

export default Sidebar;