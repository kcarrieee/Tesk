import React from 'react';
import Text from '../../Shared/Text/Text';
import styles from './Workflow.module.css';


const Workflow = () => {
    
  return (
    <section className={styles.workflow}>
        <Text tag='h3' color='gray'>С чем мы можем помочь</Text>

        <div className={styles.stages}>
            <div className={styles.block}>
                {/* <div className={styles.num}>01</div> */}
                <div className={styles.content}>
                    <Text tag='h3' className={styles.subheading}>Планирование проектов</Text>
                    <Text tag='p' >
                        Планирование проекта заключается в продумывании и организации всего, что необходимо для максимально быстрого и тщательного выполнения работ. Оно охватывает все аспекты — от определения цели, объема работ, задач и ресурсов до составления бюджета и установки сроков. В приложении возможно создать проект и подзадачи, мониторить его на всех этапах.
                    </Text>
                </div>
            </div>
            <div className={styles.block}>
                {/* <div className={styles.num}>02</div> */}
                <div className={styles.content}>
                    <Text tag='h3' className={styles.subheading}>Статистика по проектам</Text>
                    <Text tag='p'>
                        В приложении есть очень удобная вкладка “статистика по проектам”. В статистике анализируют временные затраты на отдельный проект, а также количество завершенных, новых и проектов в процессе выполнения.
                    </Text>
                </div>
            </div>
            <div className={styles.block}>
                {/* <div className={styles.num}>03</div> */}
                <div className={styles.content}>
                    <Text tag='h3' className={styles.subheading}>Возможность добавления задачь</Text>
                    <Text tag='p'>
                        Задачи полезны, когда возникают сложности в организации больших работ, особенно когда в них задействовано несколько человек. Создавайте проекты и формируйте целую группу зависимых задач. Все задачи удобно собраны  внутри главного проекта и всегда можно видеть, сколько их и как протекает процесс работы.

                    </Text>
                </div>
            </div>
            <div className={styles.block}>
                {/* <div className={`${styles.num} ${styles.num_last}`}>04</div> */}
                <div className={styles.content_last}>
                    <Text tag='h3' className={styles.subheading}>Коллаборация</Text>
                    <Text tag='p'>
                        Совместно работая над проектом, команды всем составом сотрудничают друг с другом на протяжении всего процесса. Это повышает их производительность и осведомленность о точках зрения, потребностях и графиках друг друга. Даже если какой-то участник команды находится на другом конце света, он все равно может подключиться к работе и вносить свой особый вклад.
                    </Text>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Workflow;