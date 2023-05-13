import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import add3Dots from '../../../utils/AddDots';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { cubicBezier, motion} from "framer-motion";
import { Link } from "react-router-dom";

const easing = cubicBezier(.35,.17,.3,.86)

const variants = {
  hidden: { 
    opacity: 0,
    y: 10,
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
    },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.03, delayChildren: 0.01  },
    easing
  },
};

const variantsLi = {
   show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -50 }
    }
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 500 }
    }
  }
};

const MainSidebar = () => {
    const [openProjects, setOpenProjects] = useState(false);
    const [openTasks, setOpenTasks] = useState(false);
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
      }
    fetchPrj();
    }, [])

    let tasksLength = [];

    projects?.map((el,i) => {
        const len = el.data.tasks
        return  tasksLength?.push(...len)
    })

  const tasksArr = tasksLength.filter(el => el.isDone === false)
  const doneTasksArr = tasksLength.filter(el => el.isDone === true)

  return (
    <div className={style.allprj_sidebar}>
        <div className={style.all_projects}>
        <div>
            <h3>Проекты</h3> 
            <div className={style.num}>{projects?.length === null || 0 ? 0 : projects?.length}</div>
        </div>
            <svg onClick={() => setOpenProjects(!openProjects)}
                    className={openProjects ? style.active : style.svg}
                    width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4387 1.51629L7.48096 6.59052C7.20375 6.82653 6.79625 6.82653 6.51904 6.59052L0.561261 1.51629C0.25515 1.25558 0.227775 0.792416 0.501043 0.497459C0.758633 0.219422 1.18964 0.193948 1.47819 0.439705L7 5.14262L12.5218 0.439705C12.8104 0.193948 13.2414 0.219422 13.499 0.497459C13.7722 0.792416 13.7448 1.25558 13.4387 1.51629Z" fill="black"/>
            </svg>
        </div>
        {openProjects && (
                <motion.ul 
                className={style.projectDropDown} 
                variants={variants}
                initial='hidden' 
                animate='show'
                exit='hidden'
                >
                    {projects?.map((el) => {
                        return <motion.li key={el.id} variants={variantsLi}>
                                    <Link to={`/project/${el.id}`}>
                                    {add3Dots(el?.data?.name, 15)}
                                    </Link>
                                </motion.li>
                    })}
                </motion.ul>
        )}
        <div className={style.all_projects}>
        <div>
            <h3>Задачи</h3> 
            <div className={style.num}>
            {tasksLength?.length === null || 0 ? "0" : tasksLength?.length}
            </div>
        </div>
        <svg onClick={() => setOpenTasks(!openTasks)}
        className={openTasks ? style.active : style.svg}
        width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4387 1.51629L7.48096 6.59052C7.20375 6.82653 6.79625 6.82653 6.51904 6.59052L0.561261 1.51629C0.25515 1.25558 0.227775 0.792416 0.501043 0.497459C0.758633 0.219422 1.18964 0.193948 1.47819 0.439705L7 5.14262L12.5218 0.439705C12.8104 0.193948 13.2414 0.219422 13.499 0.497459C13.7722 0.792416 13.7448 1.25558 13.4387 1.51629Z" fill="black"/>
        </svg>
        </div>
        {openTasks && (
            <motion.ul 
                className={style.projectDropDown}
                variants={variants}
                initial='hidden' 
                animate='show'
                exit='hidden'
                >
                  <motion.li  variants={variantsLi} >Новые({ tasksLength === 0 || null ? 0 : tasksArr.length})</motion.li>
                  <motion.li  variants={variantsLi} >Завершенные({ tasksLength === 0 || null ? 0 : doneTasksArr.length})</motion.li>
            </motion.ul>
        )}
    </div>
  )
}

export default MainSidebar