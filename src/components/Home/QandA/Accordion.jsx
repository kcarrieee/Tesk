import React, { useState } from 'react';
import styles from './Accordion.module.css';
import Text from '../../Shared/Text/Text';

const data = [
  {
    question: 'Как работает приложение?',
    answer: 'Tesk это универсальное веб-приложение для планирования и управления проектами и отслеживания своей продуктивности. В приложении возможно добавить проект и работать в компанде с другими участниками.'
  },
  {
    question: 'Приложение бесплатное?',
    answer: 'Приложение явялется полностью бесплатным.'
  },
  {
    question: 'Возможно ли работать в команде?',
    answer: 'Да. Создавая проект, можно добавить участников из списка зарегестрированных пользователей. Далее на странице отдельного проекта можно добавить задачу и присвоить к ней исполнителя.'
  },
  {
    question: 'Есть ли возможность добавить задачи?',
    answer: 'Да. В каждый проект можно добавить подзадачи. У каждой задачи есть свой статус название и описание.'
  },
];

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if(selected === index){
      return setSelected(null)
    }
    setSelected(index)
  }

  return (
    <section className={styles.section}>
        <Text tag='h3' color='gray'>Вопрос / ответ</Text>
        <div className={styles.accordion}>

            {data.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.title}> 
                <Text tag='h3'>{item.question}</Text>
                  <svg 
                  className={`${styles.svg} ${selected === index ? styles.open : ''}`}
                  onClick={() => toggle(index)}
                  width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 16H32" stroke="black" strokeWidth="1.5"/>
                  <path d="M16 32L16 -1.43051e-06" stroke="black" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className={selected === index ? styles.content && styles.show : styles.content}>
                  <Text tag='p' className={styles.text_content}>{item.answer}</Text>
                </div>
              </div>
            ))}
            
        </div>
    </section>
  );
}

export default Accordion;