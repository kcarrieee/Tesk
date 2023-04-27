import React,{ useState } from 'react'
import styles from './About.module.scss';
import HeaderText from '../Shared/Text/HeaderText';
import Text from '../Shared/Text/Text';
import image from '../../assets/images/about.png';

const AboutPage = () => {
    const [activeTab, setActivetab] = useState('docs');

  return (
    <section className={`container ${styles.about_page}`}>
        <div>
        <HeaderText
        blacktext="От задачи к масштабному проекту"
        greytext1="Tesk это приложение для планирования как"
        greytext2="важных проектов, так и повседневных дел."
        greytext3=""/>
        </div>
        <div className={styles.grid}>
            <div className={styles.grid__aboutapp}>
                <Text tag='h3' color='gray'>О приложении</Text>
            </div>
            <div>
                <Text tag='h3'>Работайте как вам удобно в приложении Tesk. 
                От глобальных бизнес-проектов до списков покупок – распределяйте и создавайте повседневные 
                задачи в общих проектах.
                </Text>
                <div className={styles.grid__autor}>
                    <Text tag='p' color='gray'>Автор: Литвинова Карина</Text>
                    <Text tag='p' color='gray'>Год: 2023</Text>
                </div>
            </div>
        </div>
        <div className={styles.about_image} style={{backgroundImage:`url(${image})`}}>
            {/* <img src={image} alt="dashboard" /> */}
        </div>
        <div  className={styles.grid}>
                <div className={styles.grid__maintext}>
                    <div onClick={() => setActivetab('docs')} className={ activeTab === 'docs' ? `${styles.active}` : ''}>
                    <Text tag='h3'>Документация</Text>
                    </div>
                    <div onClick={() => setActivetab('project')} className={ activeTab === 'project' ? `${styles.active}` : ''}>
                    <Text tag='h3' >Обзор проекта</Text>
                    </div>
                    <div onClick={() => setActivetab('task')} className={ activeTab === 'task' ? `${styles.active}` : ''}>
                    <Text tag='h3'>Обзор задачи</Text>
                    </div>
                </div>
                <div>
                    {activeTab === 'docs' &&
                    <div className={styles.tab_1}>
                        <Text tag='p'>
                            Вы хотите иметь приложение для управления проектами, чтобы повысить производительность вашего труда? Если да, то Tesk является отличным 
                            решением для вашего бизнеса, ежедневной рутины или хобби. 
                        </Text>
                         <Text tag='p'>
                            Начать работать в приложении довольно просто. Для начала нужно создать 
                            аккаунт или войти в уже существующий. После того, как вы вошли в приложение
                            вам необходимо создать проект.
                        </Text>
                        <Text tag='p'>
                            Каждый проект имеет несколько обязательных разделов для заполнения:
                        </Text>
                        <ul>
                            <li><Text tag='p'>Название проекта - выбирайте короткое название проекта, чтобы в будущем было проще его найти по ключевым словам - поиск производится по тексту в заголовке.</Text></li>
                            <li><Text tag='p'>Дата начала проекта - если вы не указываете дату проекта будет назначена дата, когда вы создали проект в приложении.</Text></li>
                            <li><Text tag='p'>Дата окончания работы - деделайн для работы важен и его лучше указывать;</Text></li>
                            <li><Text tag='p'>Описание проекта - основная характеристика проекта для команды;</Text></li>
                            <li><Text tag='p'>Участники - так как в приложении можно работать в команде, есть функция добавления участников проекта, не более 6ти человек в команде.</Text></li>
                            <li><Text tag='p'>Тематика - существует несколько тематик: дизайн, разработка, бизнес, повседневные дела и образование. Если необходимой тематики не нашлось рекомендуется выбирать тематику под названием “другое”.</Text></li>
                        </ul>
                    </div>
                    }
                    { activeTab === 'project' &&
                        (<div className={styles.tab_1}> 
                            <Text tag='p'>Проект в приложении Tesk — это задача, у которой есть точное начало и точное завершение, направленная на создание уникального продукта, 
                            услуги или достижения конкретного результата.</Text>
                            <Text tag='p'>
                            Основыне поля для заполнения во время создания проекта:
                        </Text>
                            <ul>
                                <li><Text tag='p'>- Название проекта</Text></li>
                                <li><Text tag='p'>- Дата начала проекта</Text></li>
                                <li><Text tag='p'>- Дата окончания работы</Text></li>
                                <li><Text tag='p'>- Описание проекта</Text></li>
                                <li><Text tag='p'>- Участники</Text></li>
                                <li><Text tag='p'>- Тематика</Text></li>
                                <li><Text tag='p'>- Задачи (возможно добавить позже)</Text></li>
                            </ul>
                            <Text tag='p'>Быстро приступайте к работе над проектами и без труда осуществляйте руководство с невероятно простым и удобным новым приложением Tesk.</Text>
                        </div>)
                    }
                    { activeTab === 'task' &&
                        (<div className={styles.tab_1}>
                            <Text tag='p'>В каждый проект можно добавить подзадачи. У каждой задачи есть свой статус название и описание.</Text>
                            <Text tag='p'>
                            На сегодняшний день задачи управления проектами состоят в планировании проекта, 
                            в составлении графиков работ по реализации проекта, в управлении рисками 
                            (оценка продукта, процесса для их усовершенствования), в управлении командой проекта, 
                            в управлении проектными работами.</Text>
                             <Text tag='p'>
                            Основыне поля для заполнения во время создания задачи:
                        </Text>
                            <ul>
                                <li><Text tag='p'>- Название задачи</Text></li>
                                <li><Text tag='p'>- Описание задачи</Text></li>
                                <li><Text tag='p'>- Участники</Text></li>
                                <li><Text tag='p'>- Дата начала</Text></li>
                                <li><Text tag='p'>- Дата окончания</Text></li>
                            </ul>
                        </div>)}
                </div>
        </div>
    </section>
  )
}

export default AboutPage