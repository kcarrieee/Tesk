import React, { useState, useEffect }  from 'react'
import MainSidebar from './MainSidebar';
import FilterSearch from './FilterSearch';
import styles from './style.module.scss';
import ProjectItem from './ProjectItem/ProjectItem';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import Spinner from '../../Shared/Preloader/Spinner';



const Main = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState(null);

  const navigate = useNavigate();

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
        console.log(projects)
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
                  {projects.map((project) => {
                    return <ProjectItem project={project}/>
                  })}
                </div>
        </div>
    </div>
  )
}

export default Main;