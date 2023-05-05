import React from 'react';
import styles from './style.module.scss';
import { ReactComponent as Heart} from './icons/heart.svg';
import { ReactComponent as Edit} from './icons/edit.svg';
import { ReactComponent as Delete} from './icons/trash.svg';
import Badge from '../../Shared/Badges/Badge';
import Tasks from './Tasks';

const Project = () => {
  return (
    <div className={styles.projectPage_wrapper}>
        <div className={styles.projectPage_header}>
            <div className={styles.projectPage_header_main}>
                <div className={styles.heading}>
                <h1>Дизайн проект для студии макияжа</h1> 
                <Badge type='new'/>
                </div>
                <div className={styles.heading_desc}>
                    <p>Тематика: <span>дизайн</span></p>
                    <p className={styles.heading_avatar}> Участники: 
                        <span>
                            <div class="flex -space-x-3.5">
                                <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                <span class="text-white flex items-center justify-center w-8 h-8 text-xs font-regular bg-black border-2 border-white rounded-full ">+4</span>
                            </div>
                        </span>
                    </p>
                    <p>Дата окончания: <span>10.12.2022</span></p>
                </div>
            </div>
            <div className={styles.heading_icons}>
                <Heart/>
                <Edit/>
                <Delete/>
            </div>
        </div>

        <div  className={styles.projectPage_content}>
            <div className={styles.projectPage_content_col}>
                <div>
                <h2>Описание</h2>
                <p>Для интерьера студии перманентного макияжа мы специально разграничили пространство стеклянными и реечными перегородками. Стеклянная перегородка отделяет кабинет владелицы салона, где она проводит обучение, а реечные перегородки — общий зал, где работают мастера, от зоны входа.
                Во время разработки проекта будет разработан план помещения и 3d модель. После будет разбивка пространства на функциональные зоны. 
                Будет применен комплекс приемов и дизайнерских идей, направленных на создание отдельных функциональных участков внутри одного помещения.
                </p>
                </div>
                <div>
                    <h2>Ссылки</h2>
                    <ul className={styles.links}>
                        <li> <a href="#">project123.figma.com </a></li>
                        <li> <a href="#">project123.figma.com </a></li>
                    </ul>
                </div>
                <div>
                    <h2>Тэги</h2>
                    <div className={styles.tags}>
                        <p>design</p>
                        <p>помещение</p>
                        <p>разработка</p>
                        <p>моделирование</p>
                        <p>архитетура</p>
                    </div>
                </div>
            </div>
            <Tasks/>
        </div>
    </div>
  )
}

export default Project;