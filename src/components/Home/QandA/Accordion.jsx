import React, { useState } from 'react';
import styles from './Accordion.module.css';
import Text from '../../Shared/Text/Text';
// import Icon from './plus.svg';

const data = [
  {
    question: 'Как работает приложение?',
    answer: 'На этом этапе начинается изготовление на основе спецификаций BIM. Доступ к данным логистики строительных работ в рамках проекта предоставляется поставщикам и подрядчикам для оптимизации сроков и повышения эффективности.'
  },
  {
    question: 'Приложение бесплатное?',
    answer: 'На этом этапе начинается изготовление на основе спецификаций BIM. Доступ к данным логистики строительных работ в рамках проекта предоставляется поставщикам и подрядчикам для оптимизации сроков и повышения эффективности.'
  },
  {
    question: 'Возможно ли работать в команде?',
    answer: 'На этом этапе начинается изготовление на основе спецификаций BIM. Доступ к данным логистики строительных работ в рамках проекта предоставляется поставщикам и подрядчикам для оптимизации сроков и повышения эффективности.'
  },
  {
    question: 'Есть ли возможность добавить задачи?',
    answer: 'На этом этапе начинается изготовление на основе спецификаций BIM. Доступ к данным логистики строительных работ в рамках проекта предоставляется поставщикам и подрядчикам для оптимизации сроков и повышения эффективности.'
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
                  <path d="M0 16H32" stroke="black" stroke-width="1.5"/>
                  <path d="M16 32L16 -1.43051e-06" stroke="black" stroke-width="1.5"/>
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