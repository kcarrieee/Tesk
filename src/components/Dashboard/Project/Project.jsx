import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase.config';
import Spinner from '../../Shared/Preloader/Spinner';
import { ReactComponent as Heart} from './icons/heart.svg';
import { ReactComponent as Edit} from './icons/edit.svg';
import { ReactComponent as Delete} from './icons/trash.svg';
import Badge from '../../Shared/Badges/Badge';
import Tasks from './Tasks';
import split from '../../../utils/StringtoArr';


const Project = () => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth();
    console.warn(project)


    // const tagsArray = split(project.tags)
    // const linksArray = split(project.links)
    
    // if(links !== null) console.log(split(links)); //Функция делит на массив links

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

    },[navigate, params.id])

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
                <Badge type={project.status}/>
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
                                <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                <img class="w-8 h-8 border-2 border-white rounded-full" src="https://iili.io/HJNb7FR.md.jpg" alt=""/>
                                <span class="text-white flex items-center justify-center w-8 h-8 text-xs font-regular bg-black border-2 border-white rounded-full ">+4</span>
                            </div>
                        </span>
                    </p>
                    <p>Дата окончания: <span>10.12.2022</span></p>
                </div>
            </div>
            <div className={styles.heading_icons}>
                <Heart/>
                <Edit/>
                <Delete/>
            </div>
        </div>

        <div  className={styles.projectPage_content}>
            <div className={styles.projectPage_content_col}>
                <div>
                <h2>Описание</h2>
                <p>{project.details}</p>
                </div>
                <div>
                    <h2>Ссылки</h2>
                    {/* <ul className={styles.links}>
                         {linksArray.map((item, i) => {
                            return  <li key={i}> <a href={item} >{item}</a></li>
                        })}
                    </ul> */}
                </div>
                <div>
                    <h2>Тэги</h2>
                    {/* <div className={styles.tags}>
                        {tagsArray.map((item, i) => {
                            return  <p key={i}>{item}</p>
                        })}
                    </div> */}
                </div>
            </div>
            <Tasks />
        </div>
    </div>
  )
}

export default Project;