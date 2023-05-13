import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase.config';
import Spinner from '../../Shared/Preloader/Spinner';
import { ReactComponent as Heart} from './icons/heart.svg';
import { ReactComponent as Edit} from './icons/edit.svg';
import { ReactComponent as Delete} from './icons/trash.svg';
import Badge from '../../Shared/Badges/Badge';
import Tasks from './Tasks';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { toast } from 'react-toastify';
import Modal from './Modal';


const Project = () => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFav, setIsFav] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate()
    const params = useParams()




    useEffect(() => {
        
        const fetchListing = async () => {
            const docRef = doc(db,'projects', params.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setProject(docSnap.data())
                setLoading(false)
            }
        }

        fetchListing()

    },[navigate, params.id, project])


    const handleUpdate = async () => {
        try {
            const projectRef = doc(db, "projects", params.id);
            await updateDoc(projectRef, {
                isImportant: true,
            });
            toast.success('Проект добавлен в важные')
        } catch (error) {
            toast.error('Что-то не так...')
        }
    }

    const handleRemove = async () => {
        try {
            const projectRef = doc(db, "projects", params.id);
            await updateDoc(projectRef, {
                isImportant: false,
            });
            toast.success('Проект удален из важных')
        } catch (error) {
            toast.error('Что-то не так...')
        }
    }


     const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "projects", params.id));

            toast.success('Проект удален')
            navigate('/dashboard')
        } catch (error) {
            toast.error('Не получилось удалить')
        }
    }

    if (loading) {
        return <Spinner/>
    }
    const themes = ["дизайн", "разработка" ,"бизнес", "образование" ,"повседневные дела", "другое"]
  return (
    <div className={styles.projectPage_wrapper}>
        <div className={styles.projectPage_header}>
            <div className={styles.projectPage_header_main}>
                <div className={styles.heading}>
                <h1>{project.name}</h1> 
                <Badge type={project.tasks.length !== 0 ? 'process': project.status}/>
                </div>
                <div className={styles.heading_desc}>
                    <p>Тематика: <span>
                        { project.activeTheme === 0 ? themes[0] : null }
                        { project.activeTheme === 1 ? themes[1] : null }
                        { project.activeTheme === 2 ? themes[2] : null }
                        { project.activeTheme === 3 ? themes[3]: null }
                        { project.activeTheme === 4 ? themes[4] : null }
                        { project.activeTheme === 5 ? themes[5] : null }
                        </span></p>
                    <p className={styles.heading_avatar}> Участники: 
                        <span>
                            <div class="flex -space-x-3.5">
                                {project.assignedUsersList.map((el, i) => (
                                    <img key={i} class="w-8 h-8 border-2 border-white rounded-full" src={`${el.photoURL}`} alt="user"/>
                                ))}
                                <img class="w-8 h-8 border-2 border-white rounded-full" src={`${project.createdBy.photoURL}`} alt="user"/>
                                <span class="text-white flex items-center justify-center w-8 h-8 text-xs font-regular bg-black border-2 border-white rounded-full ">{project.assignedUsersList.length + 1}</span>
                            </div>
                        </span>
                    </p>
                    <p>Дата окончания: <span>{format(new Date(project.dueDate.toDate().toDateString()), 'PPPP', { locale: ru })}</span></p>
                </div>
            </div>
            <div className={styles.heading_icons}>
                {user.uid === project.createdBy.id && (
                    <>
                    <div className={styles.heart} onClick={project.isImportant === true ? handleRemove : handleUpdate }>
                    <Heart 
                        className={project.isImportant === true ? styles.heart_active : styles.heart_disabled}/>
                    </div>
                    <Edit/>
                    <Delete onClick={() => setIsModalOpen(true)}/>
                    </> 
                )}
            </div>
        </div>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} handleDelete={handleDelete}/> }

        <div  className={styles.projectPage_content}>
            <div className={styles.projectPage_content_col}>
                <div>
                <h2>Описание</h2>
                <p>{project.details}</p>
                </div>
                <div>
                    <h2>Ссылки</h2>
                    <ul className={styles.links}>
                         {project.links.map((item, i) => {
                            return  <li key={i}><a href={item}>{item}</a></li>
                        })}
                        
                    </ul>
                </div>
                <div>
                    <h2>Тэги</h2>
                    <div className={styles.tags}>
                        {project.tags.map((item, i) => {
                            return  <p key={i}>{item}</p>
                        })}
                    </div>
                </div>
            </div>
            <Tasks tasks={project.tasks} prj={project}/>
        </div>
    </div>
  )
}

export default Project;