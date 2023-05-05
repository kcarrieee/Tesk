import React, { useState } from 'react';
import styles from './style.module.scss';
import { ReactComponent as Plus} from './icons/plus.svg';
import { ReactComponent as Close} from './icons/close.svg';
import ThreeDots from '../../../utils/AddDots';
import Select from "react-select";

const Tasks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const project = {
        tasks: [
             { 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                title: 'Разработка 3D модели',
                date: '12/12/2022'
            },
            { 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                title: 'Поиск аналогов проектов',
                date: '12/12/2022'
            }
        ]
    }
  return (
     <div className={styles.tasks_section}>
                <div className={styles.tasks_section_header}><h2>Задачи</h2> <Plus onClick={()=>setIsOpen(true)}/></div>
                 <p>{project.tasks.length === 0 && "Нет задачь"}</p>
                  {project.tasks && project.tasks.map((task) => (
                    <>
                        <div className={styles.tasks} key={task.id}>
                            <div className={styles.task}>
                                <label class={styles.checkbox}>
                                    <input type="checkbox" />
                                    <span class={styles.checkmark}></span>
                                </label>
                                    <h3>{ThreeDots(task.title, 20)}</h3>
                                    <span>{task.date}</span>
                                    <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                </div>
                                <p className={styles.task_content}>{ThreeDots(task.content, 190)}</p>
                            </div>
                
           
                {/* {user.uid === task.taskManUID && (
                  <img
                    onClick={() => handleDone(task)}
                    className={`done-icon ${task.done && "task-done"}`}
                    src={doneIcon}
                    alt="done icon"
                  />
                )} */}
              </>
               ))}
            {isOpen &&   
            <div className={styles.add_task_wrapper}>
            <form className={styles.add_task_form}>
                    <div className={styles.add_task_header}>
                        <h2>Добавьте задачу для члена коменды</h2>
                        <span><Close onClick={()=>setIsOpen(false)}/></span>
                    </div>
                    <div className='input_group'>
                        <input
                        className='focus:ring-0'
                        type="text"
                        placeholder='Название задачи'
                        required
                    ></input>
                     <textarea
                        className={`${styles.details} focus:ring-0`} 
                        id='details'
                        placeholder='Описание задачи'
                        ></textarea>
                    </div>
                    <Select placeholder='Выберите участника'/>
                    <button className='add_btn'>добавить задание</button>
                </form>
            </div> }
            {/* {user.uid === project.createdBy.id && (
                <>
                <form onSubmit={handleSubmit}>
                    <label>
                    <span>add task for one selected user :</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                    ></input>
                    </label>

                    <Select options={users} onChange={(option) => setTaskRes(option)} />

                    <button className="btn">add task</button>
                </form>

                {formError && <p className="error">{formError}</p>}
                </>
            )} */}
       
    </div>
  )
}

export default Tasks;