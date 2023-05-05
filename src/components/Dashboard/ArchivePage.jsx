import React from 'react';
import FilterSearch from './Main/FilterSearch';
import MainSidebar from './Main/MainSidebar';
import styles from './Main/style.module.scss';

const ArchivePage = () => {
  const projects = null;
  return (
     <div>
        <FilterSearch/>
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.project_grid}>
                  {projects ? <p>projects</p>: <p>В архиве нет проектов</p>}
                </div>
        </div>
    </div>
  )
}

export default ArchivePage;