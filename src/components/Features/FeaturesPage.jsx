import React, { useState } from 'react';
import Text from '../Shared/Text/Text';
import styles from './Features.module.scss';
import photo1 from './images/1.png';
import photo2 from './images/2.png';
import photo3 from './images/3.png';
import photo4 from './images/4.png';
import photo5 from './images/5.png';
import photo6 from './images/6.png';
import phone from './images/iphone.png';
import imageGreen from './images/dashbord-image.png';
import Projects from './Projects/Projects';

const data = [
  {
    question: 'Разнообразые проекты',
    answer: 'Тематика проектов может быть разной. Во время создания проекта можно выбрать тематику проекта из 6ти возможных.'
  },
  {
    question: 'Статистика и анализ',
    answer: 'Статистика очень важна в современном мире. В приложении возможно отследить статистику по завершенным проектам и увидеть свой прогресс.'
  },
  {
    question: 'Важные проекты',
    answer: 'После создания проекта можно определить их приоритеность, добавив их в раздел "важные проекты".'
  },
  {
    question: 'Архивные проекты',
    answer: 'Проекты архивируются после 10 дней после завершения, вы всегда сможете посмотреть на ваш прогресс и прошлые работы.'
  }
];

const FeaturesPage = () => {

    const [selected, setSelected] = useState(0);

    const toggle = (index) => {
        if(selected === index){
        return setSelected(null)
        }
        setSelected(index)
    }
  return (
    <>
    <section className='container'>
        <div className={styles.layout}>
            <img src={photo1} alt="small business"  className={`${styles.small_img} ${styles.first_img} ${styles.mobile}`}/>
            <img src={photo2} alt="freelance" className={`${styles.small_img} ${styles.second_img}`}/>
            <img src={photo3} alt="team work" className={`${styles.small_img} ${styles.first_img}`}/>
            <img src={phone} alt="phone" className={styles.big_img}/>
            <img src={photo4} alt="team work" className={`${styles.small_img} ${styles.first_img}`}/>
            <img src={photo5} alt="girl working" className={`${styles.small_img} ${styles.second_img}`}/>
            <img src={photo6} alt="small business" className={`${styles.small_img} ${styles.first_img} ${styles.mobile}`}/>
        </div>
        <div className={styles.grid}>
            <Text tag='h3' color='gray'>Контроль</Text>
            <div className={styles.text}>
                <Text tag='h3'>Начинайте свой день, чувствуя контроль над ситуацией</Text>
                <Text tag='p'>Получайте ясное представление обо всем, что нужно сделать, и не упускайте важные задачи и проекты из вида.</Text>
            </div>
        </div>
        <div className={styles.grid}>
            <Text tag='h3' color='gray'>Эффективность</Text>
            <div className={styles.text}>
                <Text tag='h3'>Повышайте уровень продуктивности каждый день</Text>
                <Text tag='p'>Поскольку высокий уровень производительности - это конечная цель любой компании, она получает выгоду от повышения производительности проектов этих людей.</Text>
            </div>
        </div>
         <div className={styles.grid}>
            <Text tag='h3' color='gray'>Коллаборация</Text>
            <div className={styles.text}>
                <Text tag='h3'>Общайтесь и контролируйте проект вместе с друзьями и коллегами</Text>
                <Text tag='p'>Сотрудничество не самоценность, а средство достижения цели, целью же являются высокие показатели в работе.</Text>
            </div>
        </div>
       
    </section>
    <section className={styles.green_section}>
        <div className={styles.section}>
        <div>
            <div className={styles.accordion}>
            {data.map((item, index) => (
              <div key={index}>
                <div className={selected === index ? styles.title : styles.titleInactive} onClick={() => toggle(index)}> 
                <Text tag='h3'>{item.question}</Text>
                </div>
                <div className={selected === index ? styles.content && styles.show : styles.content}>
                  <Text tag='p' className={styles.text_content}>{item.answer}</Text>
                </div>
              </div>
            ))}
            </div>
            </div>
            <div className={styles.accordion_image}>
                <img src={imageGreen} alt="app" />
            </div>
          </div>
    </section>
    <Projects/>
    <div className='container'>
    <div className={styles.grid}>
            <Text tag='h3' color='gray'>Ресурсы</Text>
            <a href='https://www.atlassian.com/ru/work-management/project-management/project-planning/project-plan' className={styles.link} target="_blank" rel="noreferrer" >
                <Text tag='h3'>Планирование идеальных проектов</Text>
                <Text tag='p'>Семь полезных советов из инструкции для руководителей проектов помогут вам спланировать безупречный проект.</Text>
            </a>
        </div>
    </div>
    </>
  )
}

export default FeaturesPage