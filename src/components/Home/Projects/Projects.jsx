import React from 'react';
import Text from '../../Shared/Text/Text';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <>
    <section className={styles.projects} >
        <Text tag='h3' color='gray'>Кому подойдет</Text>
        <div className={styles.margin}>
            <Text tag='h3'>Сервис для людей, кто стремится организовать свою жизнь.</Text>
        </div>
    </section>
    </>
  );
}

export default Projects;