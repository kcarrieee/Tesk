
import React from 'react';
import Text from '../../Shared/Text/Text';
import styles from './Projects.module.scss';
import image from '../images/freelance.png';
import image2 from '../images/team.png';
import image3 from '../images/bussiness.png';
import image4 from '../images/everyday.png';

const Projects = () => {
  return (
    <section className={styles.projects}>
        <Text tag='h3' color='gray'>Виды проектов</Text>
        <div className={styles.grid}>
            <div className={styles.item}>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <Text tag='p'>Для фрилансеров</Text>
            </div>
            <div className={styles.item}>
                <div className={styles.img} style={{backgroundImage: `url(${image3})`}}></div>
                <Text tag='p'>Предприниматели</Text>
            </div>
            <div className={styles.item}>
                <div style={{backgroundImage: `url(${image2})`}}></div>
                <Text tag='p'>Команды</Text>
            </div>
            <div className={styles.item}>
                <div className={styles.img} style={{backgroundImage: `url(${image4})`}}></div>
                <Text tag='p'>Для повседневной жизни</Text>
            </div>
        </div>
    </section>
  
  );
}

export default Projects;