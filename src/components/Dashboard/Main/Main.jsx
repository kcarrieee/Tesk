import React from 'react'
import MainSidebar from './MainSidebar';
import FilterSearch from './FilterSearch';
import styles from './style.module.scss';
import ProjectItem from './ProjectItem/ProjectItem';

const Main = () => {
  return (
    <div>
        <FilterSearch/>
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.project_grid}>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
        </div>
    </div>
  )
}

export default Main;