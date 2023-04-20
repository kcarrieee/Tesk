import React from 'react';
import Text from '../../Shared/Text/Text';
import styles from './Features.module.css';



const Features = () => {
    
  return (
    <section className={styles.workflow}>
        <Text tag='h3' color='gray'>Особенности</Text>

        <div className={styles.stages}>
            <Text tag='h3'>Невероятно простой сервис для управление задачами.</Text>
            <div className={styles.grid}>
                <div className={styles.grid_block}>
                    <Text tag='h3'>01</Text>
                    <Text tag='p'>Всегда с вами. <br /> Используйте приложение на любых устройствах и в любых ситуациях.
                    </Text>
                </div>
                <div className={styles.grid_block}>
                    <Text tag='h3'>02</Text>
                    <Text tag='p'>Настройте  для себя. <br /> Используйте фильтры, метки, чтобы персонализировать список.
                    </Text>
                </div>
                <div className={styles.grid_block}>
                    <Text tag='h3'>03</Text>
                    <Text tag='p'>Методики продуктивности.  <br />Улучшайте свои навыки в области продуктивности и эффективности.
                    </Text>
                </div>
                <div className={styles.grid_block}>
                    <Text tag='h3'>04</Text>
                    <Text tag='p'>Для людей разных профессий. <br /> Организация проектов тематикам в зависимости от рода деятельности.
                    </Text>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Features;