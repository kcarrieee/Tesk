import React from 'react';
import Header from '../DashboardNav/Header';
import styles from './Layout.module.scss';
import SidebarMain from '../DashboardNav/SidebarMain';
import { Link } from 'react-router-dom';



const DashboardLayout = ({children, page}) => {
  return (
    <div className={styles.app}>
      <SidebarMain/>
      <div className={styles.main__container}>
      <Header page={page} />
      <main className={styles.main}>
        {children}
      </main>
      </div>
       <button className={styles.large__addBtn}>
          <Link to='/add-project'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8H16" stroke="#F9F9F9" stroke-width="2"/>
          <path d="M8 16L8 -7.15256e-07" stroke="#F9F9F9" stroke-width="2"/>
          </svg>
          </Link>
        </button>
    </div>
  )
}

export default DashboardLayout;