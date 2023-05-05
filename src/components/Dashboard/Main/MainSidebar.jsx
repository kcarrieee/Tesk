import React, { useState } from 'react';
import style from './style.module.scss';

const MainSidebar = () => {
    const [openProjects, setOpenProjects] = useState(false);
    const [openTasks, setOpenTasks] = useState(false);

  return (
    <div className={style.allprj_sidebar}>
        <div className={style.all_projects}>
        <div>
            <h3>Проекты</h3> 
            <div className={style.num}>0</div>
        </div>
        <svg onClick={() => setOpenProjects(!openProjects)}
        className={openProjects ? style.active : style.svg}
        width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4387 1.51629L7.48096 6.59052C7.20375 6.82653 6.79625 6.82653 6.51904 6.59052L0.561261 1.51629C0.25515 1.25558 0.227775 0.792416 0.501043 0.497459C0.758633 0.219422 1.18964 0.193948 1.47819 0.439705L7 5.14262L12.5218 0.439705C12.8104 0.193948 13.2414 0.219422 13.499 0.497459C13.7722 0.792416 13.7448 1.25558 13.4387 1.51629Z" fill="black"/>
        </svg>
        </div>
        {openProjects && (
            <ul className={style.projectDropDown}>
                <li>Дизайн студии</li>
                <li>Дизайн студии</li>
                <li>Дизайн студии</li>
            </ul>
        )}
        <div className={style.all_projects}>
        <div>
            <h3>Задачи</h3> 
            <div className={style.num}>0</div>
        </div>
        <svg onClick={() => setOpenTasks(!openTasks)}
        className={openTasks ? style.active : style.svg}
        width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4387 1.51629L7.48096 6.59052C7.20375 6.82653 6.79625 6.82653 6.51904 6.59052L0.561261 1.51629C0.25515 1.25558 0.227775 0.792416 0.501043 0.497459C0.758633 0.219422 1.18964 0.193948 1.47819 0.439705L7 5.14262L12.5218 0.439705C12.8104 0.193948 13.2414 0.219422 13.499 0.497459C13.7722 0.792416 13.7448 1.25558 13.4387 1.51629Z" fill="black"/>
        </svg>
        </div>
        {openTasks && (
            <ul className={style.projectDropDown}>
                <li>Новые(0)</li>
                <li>В процессе(0)</li>
                <li>Завершены(0)</li>
                <li>В архиве(0)</li>
            </ul>
        )}
    </div>
  )
}

export default MainSidebar