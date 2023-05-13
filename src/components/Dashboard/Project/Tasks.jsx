import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { ReactComponent as Plus} from './icons/plus.svg';
import { ReactComponent as Close} from './icons/close.svg';
import ThreeDots from '../../../utils/AddDots';
import Select from "react-select";
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Preloader/Spinner';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import uuid from 'react-uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuth } from "firebase/auth";


const Tasks = ({ tasks, prj }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState(null);
    const [taskName, setTaskName] = useState(''); 
    const [taskDetails, setTaskDetails] = useState(''); 
    const [assignedUsers, setAssignedUsers] = useState([]);
    const [taskRes, setTaskRes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const params = useParams();
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(taskRes)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchInfo = async () => {
    
        const usersRef = collection(db, 'users')
        const docsUsers = await getDocs(usersRef)
       
        let usersArr = []

        docsUsers.forEach((doc) => {
          return usersArr.push({
            data: doc.data(),})
        })

        if (usersArr) {
                    const options = [...usersArr].map((user) => {
                        return { value: user.data, label: user.data.name };
                    });
                    setUsers(options);
                }
        }

        fetchInfo();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!taskName) {
            setFormError("введите название задачи");
            return;
        }
        if (!taskDetails) {
            setFormError("введите описание задачи");
            return;
        }

        setFormError(null);
        setLoading(true);
        
         try {
            const taskRef = {
                taskName,
                taskDetails,
                assignedUsers,
                date: new Date().toDateString(),
            }
            const taskToAdd = {
                    taskManName:  taskRes.value.name,
                    photoURL: taskRes.value.image,
                    // taskManUID: taskRes.id,
                    content: taskRef,
                    isDone: false,
                    id:uuid(),
            }

            //update in Firestore
            const projectRef = doc(db, "projects", params.id);
            await updateDoc(projectRef, {
                tasks: [...prj.tasks, taskToAdd]
            })
            toast.success('Задача добавлена')
            setIsOpen(false)
            // window.location.reload()
        } catch (error) {
            console.log(error)
            toast.error('Не получилось добавить задачу')
        }
    }

    const handleDone = async () => {
        const projectRef = doc(db, "projects", params.id);
        //  await updateDoc(projectRef, {
        //         tasks: navigator,   
        //     })
    }

       


  return (
     <div className={styles.tasks_section}>
                <div className={styles.tasks_section_header}><h2>Задачи</h2> 
                 {user.uid === prj.createdBy.id && ( <Plus onClick={()=>setIsOpen(true)}/>)}
               </div>
                { tasks.length === 0 ?  <p>Нет задачь</p> : (
                 tasks.map((task, i) => (
                    <>
                        <div className={styles.tasks} key={i}>
                            <div className={styles.task}>
                                <label class={styles.checkbox}>
                                    <input type="checkbox" onClick={() => handleDone(task)} checked={task.isDone} />
                                    <span class={styles.checkmark}></span>
                                </label>
                                    <h3>{ThreeDots(task.content.taskName, 90)}</h3>
                                    <span>date</span>
                                    <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                </div>
                                <p className={styles.task_content}>{ThreeDots(task.content.taskDetails, 190)}</p>
                            </div>
                
                            {/* {user.uid === task.taskManUID && (
                            <img
                                onClick={() => handleDone(task)}
                                className={`done-icon ${task.done && "task-done"}`}
                                src={doneIcon}
                                alt="done icon"
                            />)} */}
                    </>
               )))}
   
            { isOpen &&   
            <div className={styles.add_task_wrapper}>
            <form onSubmit={handleSubmit}
            className={styles.add_task_form} >
                    <div className={styles.add_task_header}>
                        <h2>Добавьте задачу для члена коменды</h2>
                        <span><Close onClick={()=>setIsOpen(false)}/></span>
                    </div>
                    <div className='input_group'>
                        <input
                        className='focus:ring-0'
                        type="text"
                        placeholder='Название задачи'
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                     <textarea
                        className={`${styles.details} focus:ring-0`} 
                        id='details'
                        placeholder='Описание задачи'
                         value={taskDetails}
                        onChange={(e) => setTaskDetails(e.target.value)}
                        ></textarea>
                    </div>
                    <Select placeholder='Выберите участника'
                        options={users}
                        onChange={(option) => setTaskRes(option)} 
                    />
                    <button className='add_btn'>добавить задание</button>
                    {formError && <p className="error">{formError}</p>}
                </form>
            </div>}
    </div>
  )
}

export default Tasks;