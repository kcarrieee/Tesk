import React, { useState, useEffect }  from 'react'
import MainSidebar from './MainSidebar';
import FilterSearch from './FilterSearch';
import styles from './style.module.scss';
import ProjectItem from './ProjectItem/ProjectItem';
// import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import Spinner from '../../Shared/Preloader/Spinner';
import { getAuth } from 'firebase/auth';


const Main = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState("дате");

  const auth = getAuth();
  const user = auth.currentUser;


  useEffect(() => {
      const fetchPrj = async () => {
          const prjRef = collection(db, 'projects')
          const q = query(prjRef, orderBy('timestamp', 'desc'))
          const querySnap = await getDocs(q)
          
          let prj = []

          querySnap.forEach((doc) => {
            return prj.push({
              id: doc.id,
              data: doc.data(),
            })
          })
          setProjects(prj)
          setLoading(false)
      }
        fetchPrj();

    }, [])

    if (loading) {
        return <Spinner />
    }

      
   const sortedProjects = projects.filter((document) => {
        switch (currentFilter) {
          case "дате":
            return true;
          case "мои":
            let assignedToMe = false;
            document.data.assignedUsersList.forEach((u) => {
              if (user.uid === u.id || user.uid === document.data.createdBy.id) {
                assignedToMe = true;
              }
            });

          return assignedToMe;
          case "0":
          case "1":
          case "2":
            return document.data.activeTheme == currentFilter;

          default:
            return true;
        }
      });

  return (
    <div>
        <FilterSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          />
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.project_grid}>
                  {/* {projects.filter(el => el.data.name.toLowerCase().includes(searchValue.toLowerCase())).map((project) => {
                    return <ProjectItem project={project}/>
                  })} */}
                   {sortedProjects.filter(el => el.data.name.toLowerCase().includes(searchValue.toLowerCase())).map((project) => {
                    return <ProjectItem project={project}/>
                  })}
                </div>
        </div>
    </div>
  )
}

export default Main;