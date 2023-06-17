import React, { useState, useEffect }  from 'react';
import MainSidebar from './Main/MainSidebar';
import styles from './Main/style.module.scss';
import Text from '../Shared/Text/Text';
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts';
import  Badge from '../Shared/Badges/Badge';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
import Spinner from '../Shared/Preloader/Spinner';
import { format } from 'date-fns';
import { getAuth } from 'firebase/auth';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 hover:border-gray-200 focus:border-gray-200">
        <p className="label">{`${label}`}</p>
        <p className='text-[#5A6DF7] text-s'>Новые: {`${payload[0].value}`}</p>
        <p className='text-[#38875C] text-s' >Завершенные: {`${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const Statistics = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState(null);


   useEffect(() => {
      const fetchPrj = async () => {
          const prjRef = collection(db, 'projects')
          const querySnap = await getDocs(prjRef)

          let prj = []

          querySnap.forEach((doc) => {
            return prj.push({
              id: doc.id,
              data: doc.data(),
            })
          })

          setProjects(prj)
          setLoading(false)
      }

        fetchPrj();
        
    }, [])
    const auth = getAuth();
    const user = auth.currentUser;
    const usersProjects = projects?.filter(document => user.uid === document.data.createdBy.id
      // (document.data.assignedUsersList.forEach((u) => (user.uid === u.id || user.uid === document.data.createdBy.id)))
      )
   
    
    const januaryNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "January")
    const januaryDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "January" &&  project.data.status === 'done')

    const februaryNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "February")
    const februaryDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "February" &&  project.data.status === 'done')

    const marchNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "March")
    const marchDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "March" &&  project.data.status === 'done')

    const aprilNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "April" )
    const aprilDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "April" &&  project.data.status === 'done')

    const mayNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "May")
    const mayDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "May" &&  project.data.status === 'done')

    const juneNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "June")
    const juneDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "June" &&  project.data.status === 'done')

    const julyNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "July")
    const julyDone = projects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "July" &&  project.data.status === 'done')

    const augustNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "August")
    const augustDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "August" &&  project.data.status === 'done')

    const septemberNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "September")
    const septemberDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "September" &&  project.data.status === 'done')

    const octoberNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "October")
    const octoberDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "October" &&  project.data.status === 'done')

    const novemberNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "November")
    const novemberDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "November" &&  project.data.status === 'done')

    const decemberNew = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "December")
    const decemberDone = usersProjects?.filter(project => format(new Date(project.data.timestamp.toDate().toDateString()), 'MMMM') === "December" &&  project.data.status === 'done')
    
    const data = [
      {name: 'Январь', new: januaryNew?.length, done: januaryDone?.length, amt: 30},
      {name: 'Февраль', new: februaryNew?.length, done: februaryDone?.length, amt: 30},
      {name: 'Март', new: marchNew?.length, done: marchDone?.length, amt: 30},
      {name: 'Апрель', new: aprilNew?.length, done: aprilDone?.length, amt: 30},
      {name: 'Май', new: mayNew?.length, done: mayDone?.length, amt: 30},
      {name: 'Июнь', new: juneNew?.length, done: juneDone?.length, amt: 30},
      {name: 'Июль', new: julyNew?.length, done: julyDone?.length, amt: 30},
      {name: 'Август', new: augustNew?.length, done: augustDone?.length, amt: 30},
      {name: 'Сентябрь', new: septemberNew?.length, done: septemberDone?.length, amt: 30},
      {name: 'Октябрь', new: octoberNew?.length, done: octoberDone?.length, amt: 30},
      {name: 'Ноябрь', new: novemberNew?.length, done: novemberDone?.length, amt: 30},
      {name: 'Декабрь', new: decemberNew?.length, done: decemberDone?.length, amt: 30},
    ];

    if (loading) {
        return <Spinner/>
    }
    const newProjects = usersProjects?.filter(project => project.data.status === 'new')
    const processProjects = usersProjects?.filter(project => project.data.status === 'process')
    const doneProjects = usersProjects?.filter(project => project.data.status === 'done')
    const archiveProjects = usersProjects?.filter(project => project.data.status === 'archive')
  return (
    <div>
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.stats}>
                    <div className={styles.container_stats}>
                      <div className={styles.general}>
                      <h1> Проекты <br></br>  
                        {usersProjects?.length}
                      </h1>
                      <div>
                        <Text tag='p'>Задачи</Text>
                         <p className={styles.task_desc}>
                          в приложении Tesk - это описание того, что будет достигнуто, частные результаты, этапы на пути к цели. 
                         </p>
                        <ul className={styles.tasks}>
                          <li>Новые - 12</li>
                          <li>Завершенные - 1</li>
                        </ul>
                      </div>
                      </div>
                      
                      <div className={styles.project_stats}>
                        <div className={styles.project_single_stat}>
                        <Badge type='new'/>
                        <div>
                          <span className={styles.percent}>{Math.round(newProjects?.length*100/projects?.length)}%</span>
                          <h3>
                            новых <br />
                            {newProjects?.length}
                          </h3>
                        </div>
                        </div>
                        <div className={styles.project_single_stat}><Badge type='process'/>
                        <div>
                          <span className={styles.percent}>{Math.round(processProjects?.length*100/projects?.length)}%</span>
                          <h3>
                            в процессе <br />
                            {processProjects?.length}
                          </h3>
                        </div>
                        </div>
                        <div className={styles.project_single_stat}><Badge type='done'/>
                        <div>
                        <span className={styles.percent}>{Math.round(doneProjects?.length*100/projects?.length)}%</span>
                        <h3>
                          завершенных <br />
                          {doneProjects?.length}
                        </h3>
                        </div>
                        </div>
                        <div className={styles.project_single_stat}><Badge type='archive'/>
                        <div>
                        <span className={styles.percent}>{Math.round(archiveProjects?.length*100/projects?.length)}%</span>
                        <h3>
                          в архиве<br />
                          {archiveProjects?.length}
                        </h3>
                        </div>
                        </div>
                      </div>
                    </div>
                    <h3 className={styles.stats_heading}>Статистика по проектам</h3>
                    <div className={styles.chart}>
                      <ul className={styles.chart_legend}>
                       <li> 
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#7989F2"/>
                        </svg>
                        <span>Новые проекты</span>  
                         </li>
                       <li><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#4E845F"/>
                            </svg>
                     <span>  Завершенные проекты </span> </li> </ul>
                      <ResponsiveContainer width="100%" height={350}>
                      <AreaChart width={500} height={500} data={data}
                      margin={{
                      top: 0,
                      right: 0,
                      left: -15,
                      bottom: 0,
                    }} >
                          <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#5A6DF7" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#5A6DF7" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#38875C" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#38875C" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip content={<CustomTooltip />} 
                          />
                          
                          <Area type="monotone" dataKey="new" stroke="#5A6DF7" fillOpacity={1} fill="url(#colorUv)" />
                          <Area type="monotone" dataKey="done" stroke="#38875C" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Statistics;