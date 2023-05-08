import React from 'react';
import styles from './style.module.scss';
import { Link } from "react-router-dom";
import Start from './icons/start-icon.png';
import End  from './icons/end-icon.png';
import Badge from '../../../Shared/Badges/Badge';
import add3Dots from '../../../../utils/AddDots';
import design from './icons/design.svg';
import development from './icons/development.svg';
import education from './icons/education.svg';
import other from './icons/other.svg';
import everyday from './icons/everyday.svg';
import bussiness from './icons/bussiness.svg';


const images = [design, development ,bussiness, education ,everyday, other ]

const ProjectItem = ({ project }) => {
  const { id, data } = project;


  return (
    <Link to={`/project/${id}`}>
    <div className={styles.project_wrapper}>
      <div className={styles.project_header}>
        { data.activeTheme === 0 ? <img src={images[0]}  alt="дизайн" /> : null }
        { data.activeTheme === 1 ? <img src={images[1]}  alt="разработка" /> : null }
        { data.activeTheme === 2 ? <img src={images[2]}  alt="бизнес" /> : null }
        { data.activeTheme === 3 ? <img src={images[3]}  alt="образование" /> : null }
        { data.activeTheme === 4 ? <img src={images[4]}  alt="повседневные дела" /> : null }
        { data.activeTheme === 5 ? <img src={images[5]}  alt="другое" /> : null }
        <Badge type={data.status}/>
      </div>
      <div className={styles.project_content}>
        <h3>{add3Dots(data.name,50)}</h3>
        <div className={styles.project_dates}>
          <div className={styles.project_date}>
            <img src={Start} alt="начало проекта" />
             <p> Начало: 10 июня
            
             </p>
          </div>
          <div className={styles.project_date}>
            <img src={End} alt="конец проекта" />
           <p> Конец: 20 июня</p>
          </div>
        </div>

      <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
        <div class="bg-black h-1 rounded-full" style={{width: '45%'}}></div>
      </div>

      <div className={styles.project_footer}>
        <p>Дата создания: <span>10.05.2023</span></p>
        <div>
        <div class="flex -space-x-3.5">
            <img class="w-8 h-8 border-2 border-white rounded-full" src={data.createdBy.photoUrl} alt=""/>
            <img class="w-8 h-8 border-2 border-white rounded-full" src='https://iili.io/HJNb7FR.md.jpg' alt=""/>
            <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
            <span class="text-white flex items-center justify-center w-8 h-8 text-xs font-regular bg-black border-2 border-white rounded-full ">+4</span>
        </div>
        </div>
      </div>
      </div>
    </div>
    </Link>
  )
}

export default ProjectItem;