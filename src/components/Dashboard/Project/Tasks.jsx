import React, { useState, useEffect, useContext } from 'react';
// import { TasksContext } from '../../../context/TasksContent';
import styles from './style.module.scss';
import { ReactComponent as Plus} from './icons/plus.svg';
import { ReactComponent as Close} from './icons/close.svg';
import ThreeDots from '../../../utils/AddDots';
import Select from "react-select";
import { toast } from 'react-toastify';
import { getDocs, collection, updateDoc, doc, addDoc, orderBy, query, serverTimestamp, deleteDoc} from 'firebase/firestore';
import { db } from '../../../firebase.config';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { Tooltip } from 'flowbite-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ReactComponent as Delete} from './icons/trash.svg';
import { useCollection } from 'react-firebase-hooks/firestore';
import  TasksSkeleton  from './TasksSkeleton';

  const colourStyles = {
   control: (base, state) => ({
      ...base,
      boxShadow: "none",
      outline: state.isFocused && state.isSelected ? 'none' : '',
      height: 42,
      borderRadius: 8,
    
    })
    ,
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      
    }
  }
  };


const Tasks = ({ prj }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState(null);
    const [taskName, setTaskName] = useState(''); 
    const [selectedTask, setSelectedTask] = useState(null); 
    const [taskDetails, setTaskDetails] = useState(''); 
    const [assignedUsers, setAssignedUsers] = useState([]);
    const [taskRes, setTaskRes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const [ tasks, setTasks ] = useState(null);
    const params = useParams();
    const auth = getAuth();
    const user = auth.currentUser;

   
    const docRef = collection(db, `projects/${params.id}/tasks/`)
    const [tasksD, loadingTask] = useCollection( query( docRef, orderBy("timestamp", "desc")), { includeMetadataChanges: true });
    let tArr = []

    tasksD?.forEach((doc) => {
          return tArr.push({
            data: doc.data(), id: doc.id})
    })
    
   
    
    

    useEffect(() => {
        const fetchInfo = async () => {
    
        const usersRef = collection(db, 'users')
        const docsUsers = await getDocs(usersRef)
       
        let usersArr = []

        docsUsers.forEach((doc) => {
          return usersArr.push({
            data: doc.data(), id: doc.id})
        })

        if (usersArr) {
                    const options = [...usersArr].map((user) => {
                        return { value: user.data, label: user.data.name, id: user.id };
                    });
                    setUsers(options);
                }
        }

        fetchInfo();
    }, [])


    

    useEffect(() => {
      const fetchTasks = async () => {
          const prjRef = collection(db, `projects/${params.id}/tasks/`)

          const q = query(prjRef, orderBy('timestamp', 'desc'))
          const querySnap = await getDocs(q)

          
          let t = []

          querySnap.forEach((doc) => {
            return t.push({
              id: doc.id,
              data: doc.data(),
            })
          })
          setTasks(t)
          
      }
    fetchTasks();

    }, [params.id])

   



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

            const taskContent = {
                taskName,
                taskDetails,
                assignedUsers,
                date: new Date().toDateString(),
            }

            const taskToAdd = {
                    taskManName: taskRes.value.name,
                    photoURL: taskRes.value.image,
                    taskManUID: taskRes.id,
                    content: taskContent,
                    isDone: false,
                    timestamp: serverTimestamp()
            }
            const docRef = doc(db, "projects", params.id);
            const colRef = collection(docRef, "tasks")
            addDoc(colRef, taskToAdd);
            toast.success('Задача добавлена')
            setIsOpen(false)

            setTaskName('')
            setTaskDetails('')
            
        
      } catch (error) {
        console.log(error)
        
      }

    }
   
     
    const handleDone = async () => {
        
        try {
            const taskRef = doc(db,`projects/${params.id}/tasks/${selectedTask}`);
            await updateDoc(taskRef, {
                isDone: true
            })

        } catch (error) {
            console.log(error)
        }
    }
   
    const handleUpdateStatus = () => {
        handleDone();
    }

    const handleDelTask = async() => {
        try {
            const taskRef = doc(db,`projects/${params.id}/tasks/${selectedTask}`);
            await deleteDoc(taskRef);
            toast.success('Задача удалена');

        } catch (error) {
            toast.error('Не получилось удалить')
        }
    }
    const len = tasks?.length
    console.log(len)
    

  return (
     <div className={styles.tasks_section}>
                <div className={styles.tasks_section_header}><h2>Задачи</h2> 
                 {user.uid === prj.createdBy.id && ( <Plus onClick={()=>setIsOpen(true)}/>)}
               </div>
            
                { tasks?.length === 0 
                ?  <p>Нет задач</p> 
                : loadingTask
                ? [...new Array(3)].map((_, index) => <TasksSkeleton key={index}/>) 
                : (
                         tArr?.map((task) => (
                        <div className={styles.tasks} key={uuid()}>
                            <div className={styles.task} 
                            onMouseEnter={()=> setSelectedTask(task.id)}
                            >
                                
                                <label className={user.uid === task.data.taskManUID ? 
                                            styles.checkbox 
                                            : `${styles.checkbox} ${styles.disabledInput}`}
                                >
                                    <input type="checkbox"
                                            onChange={() => handleUpdateStatus()} 
                                            checked={task.data.isDone}  
                                     />
                                    <span className={styles.checkmark}></span>
                                </label>
                                
                                    <h3 className={task.data.isDone === true ? 'text-[#c8c8c8]': ''}>{ThreeDots(task.data.content.taskName, 90)}</h3>
                                    <span className={task.data.isDone === true ? 'text-[#d9d9d9]': ''}>
                                    {format(new Date(task.data.content.date), 'dd/LL/yyyy', { locale: ru })}
                                    </span>
                                    <Tooltip style="light" content={task.data.taskManName}>
                                    <img className="w-8 h-8 border-2 border-white rounded-full" src={task.data.photoURL} alt="task user"/>
                                    </Tooltip>
                                    {user.uid === prj.createdBy.id && (
                                    <Delete
                                        
                                        onClick={()=> handleDelTask()}
                                        className='cursor-pointer'
                                    />)}
                                </div>
                                <p className={ task.data.isDone === true ? styles.task_content_done : styles.task_content}>{ThreeDots(task.data.content.taskDetails, 190)}</p>
                                  
                            </div>
                 
               )))}
   
            { isOpen &&   
            <div className={styles.add_task_wrapper}>
            <form onSubmit={handleSubmit}
            className={styles.add_task_form} >
                    <div className={styles.add_task_header}>
                        <h2>Добавить новую задачу в проект</h2>
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
                    <Select 
                        placeholder={<div className="select-placeholder-text">Выберите участника</div>}
                        noOptionsMessage={() => "Больше нет вариантов"}
                        options={users}
                        onChange={(option) => setTaskRes(option)} 
                        styles={colourStyles}
                        theme={(theme) => ({
                        ...theme,
                        border: '1px solid black',
                        colors: {
                        ...theme.colors,
                        primary25: '#eeeff1',
                        primary: 'black',
                        },
                    })}
                    />
                    <button className='add_btn'>добавить задание</button>
                    {formError && <p className="error">{formError}</p>}
                </form>
            </div>}
    </div>
  )
}

export default Tasks;