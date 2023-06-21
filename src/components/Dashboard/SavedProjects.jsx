import React, {useState, useEffect} from 'react';
import FilterSearch from './Main/FilterSearch';
import MainSidebar from './Main/MainSidebar';
import styles from './Main/style.module.scss';
import ProjectItem from './Main/ProjectItem/ProjectItem';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { getAuth } from 'firebase/auth';
import Spinner from '../../components/Shared/Preloader/Spinner';
import uuid from 'react-uuid';

const SavedProjects = () => {

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState("дате");
  
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
      const fetchPrj = async () => {
          const prjRef = collection(db, 'projects')
          const querySnap = await getDocs(prjRef)

          let prj = []

          querySnap.forEach((doc) => {
            return prj.push({
              id: doc.id,
              data: doc.data(),
            })
          })

          setProjects(prj);
          setLoading(false);
      }

        fetchPrj();
    }, [])

    if (loading) {
        return <Spinner />
    }
    const sortProjects = projects?.filter((document) => {
            let assignedToMe = false;
            document.data.assignedUsersList.forEach((u) => {
              if (user.uid === u.id || user.uid === document.data.createdBy.id) {
                assignedToMe = true;
              }
              return assignedToMe
            });
            return assignedToMe
    });
    const savedProjects = sortProjects.filter(project => project.data.isImportant === true)
    const sortedProjects = savedProjects.filter((document) => {
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
          currentFilter={currentFilter}/>
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.project_grid}>
                    {projects.filter(el => el.data.isImportant === true).length !== 0 ? (
                      sortedProjects.filter(el => el.data.name.toLowerCase().includes(searchValue.toLowerCase())).map((project) => {
                          return <ProjectItem project={project} key={uuid()}/>
                      })
                    ) : <p>У вас пока что нет важных проектов.</p>}
                    { sortProjects.length === 0 && (<p>У вас пока что нет важных проектов.</p>)}
                </div>
        </div>
    </div>
  )
}

export default SavedProjects;