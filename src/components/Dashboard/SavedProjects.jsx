import React, {useState, useEffect} from 'react';
import FilterSearch from './Main/FilterSearch';
import MainSidebar from './Main/MainSidebar';
import styles from './Main/style.module.scss';
import ProjectItem from './Main/ProjectItem/ProjectItem';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
import Spinner from '../../components/Shared/Preloader/Spinner';

const SavedProjects = () => {

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

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

          setProjects(prj)
          setLoading(false)
      }

        fetchPrj();
    }, [])

    if (loading) {
        return <Spinner />
    }

  return (
     <div>
        <FilterSearch/>
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.project_grid}>
                    {projects.filter(el => el.data.isImportant === true).length !== 0 ? (
                      projects.filter((el) => (el.data.isImportant === true)).map((project) => {
                          return <ProjectItem project={project}/>
                      })
                    ) : <p>У вас пока что нет важных проектов.</p>}
                </div>
        </div>
    </div>
  )
}

export default SavedProjects;