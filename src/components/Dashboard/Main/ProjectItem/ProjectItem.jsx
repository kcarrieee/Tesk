import React from 'react';
import styles from './style.module.scss';
import { ReactComponent as Icon} from './icons/development.svg';
import Start from './icons/start-icon.png';
import End  from './icons/end-icon.png';
import Badge from '../../../Shared/Badges/Badge';
import add3Dots from '../../../../utils/AddDots';


const ProjectItem = () => {
  return (
    <div className={styles.project_wrapper}>
      <div className={styles.project_header}>
        <Icon/>
        <Badge type='new'/>
      </div>
      <div className={styles.project_content}>
        <h3>{add3Dots('Дизайн проект для студии макияжа в компании РосТек плюс',50)}</h3>
        <div className={styles.project_dates}>
          <div className={styles.project_date}>
            <img src={Start} alt="начало проекта" />
             <p> Начало: 10 июня</p>
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
            <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
            <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
            <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
            <span class="text-white flex items-center justify-center w-8 h-8 text-xs font-regular bg-black border-2 border-white rounded-full ">+4</span>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectItem;