
import React from 'react';
import Text from '../../Shared/Text/Text';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
        <Text tag='h3' color='gray'>Виды проектов</Text>
        <div className={styles.grid}>
            <div className={styles.item}>
                <div></div>
                <Text tag='p'>Для фрилансеров</Text>
            </div>
            <div className={styles.item}>
                <div className={styles.img}></div>
                <Text tag='p'>Команды </Text>
            </div>
            <div className={styles.item}>
                <div></div>
                <Text tag='p'>Для повседневной жизни</Text>
            </div>
            <div className={styles.item}>
                <div className={styles.img}></div>
                <Text tag='p'>Индивидуальные предприниматели</Text>
            </div>
        </div>
    </section>
  
  );
}

export default Projects;