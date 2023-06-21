import React, { useState, useEffect }  from 'react'
import MainSidebar from './MainSidebar';
import FilterSearch from './FilterSearch';
import styles from './style.module.scss';
import ProjectItem from './ProjectItem/ProjectItem';

import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import Spinner from '../../Shared/Preloader/Spinner';
import { getAuth } from 'firebase/auth';
import uuid from 'react-uuid';



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

    const sortProjects = projects.filter((document) => {
            let assignedToMe = false;
            document.data.assignedUsersList.forEach((u) => {
              if (user.uid === u.id || user.uid === document.data.createdBy.id) {
                assignedToMe = true;
              }
              return assignedToMe
            });
            return assignedToMe
    });
      
   const sortedProjects = sortProjects.filter((document) => {
        switch (currentFilter) {
          case "дате":
            let assignedToMe = false;
            document.data.assignedUsersList.forEach((u) => {
              if (user.uid === u.id || user.uid === document.data.createdBy.id) {
                assignedToMe = true;
              }
            });

          return assignedToMe;

          case "мои":
            let myProjects = false;
           
            if (user.uid === document.data.createdBy.id) {
                myProjects = true;
            }
          

          return myProjects;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":

            return document.data.activeTheme.toString() === currentFilter;

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
              <MainSidebar />
                  <div className={styles.project_grid}>
                    {sortedProjects 
                      ?
                      sortedProjects.filter(el => el.data.name.toLowerCase().includes(searchValue.toLowerCase())).map((project) => {
                        return <ProjectItem project={project} key={uuid()}/>
                      }) 
                      : <p>Нет проектов</p>
                  }
                  { sortedProjects.length === 0 && (<p>Нет проектов</p>) }
          </div>
        </div>
    </div>
  )
}

export default Main;