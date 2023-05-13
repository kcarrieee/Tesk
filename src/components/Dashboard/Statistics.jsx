import React, { useState, useEffect }  from 'react';
import MainSidebar from './Main/MainSidebar';
import styles from './Main/style.module.scss';
import Text from '../Shared/Text/Text';
import { AreaChart, XAxis, YAxis, Tooltip, Area,ResponsiveContainer  } from 'recharts';
import  Badge from '../Shared/Badges/Badge';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
import Spinner from '../Shared/Preloader/Spinner';

const data = [
  {name: 'Январь', new: 4, done: 2, amt: 30},
  {name: 'Февраль', new: 2, done: 2, amt: 30},
  {name: 'Март', new: 1, done: 1, amt: 30},
  {name: 'Апрель', new: 2, done: 2, amt: 30},
  {name: 'Май', new: 3, done: 1, amt: 30},
  {name: 'Июнь', new: 4, done: 3, amt: 30},
  {name: 'Июль', new: 5, done: 0, amt: 30},
  {name: 'Август', new: 6, done: 0, amt: 30},
  {name: 'Сентябрь', new: 4, done: 0, amt: 30},
  {name: 'Октябрь', new: 1, done: 5, amt: 30},
  {name: 'Ноябрь', new: 1, done: 2, amt: 30},
  {name: 'Декабрь', new: 0, done: 1, amt: 30},
];



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 hover:border-gray-200 focus:border-gray-200">
        <p className="label">{`${label}`}</p>
        <p className='text-[#5A6DF7] text-s'>Новый: {`${payload[0].value}`}</p>
        <p className='text-[#38875C] text-s' >Завершен: {`${payload[1].value}`}</p>
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
        console.log(projects)
    }, [])

    if (loading) {
        return <Spinner/>
    }

  return (
    <div>
        <div className={styles.main}>
            <MainSidebar/>
                <div className={styles.stats}>
                    <div className={styles.container_stats}>
                      <div className={styles.general}>
                      <h1> {projects.length}<br /> 
                        Проекта
                      </h1>
                      <div>
                        <Text tag='p'>Задачи</Text>
                         <p className={styles.task_desc}>
                          в приложении Tesk - это описание того, что будет достигнуто, частные результаты, этапы на пути к цели. 
                         </p>
                        <ul className={styles.tasks}>
                          <li>Новые - 0</li>
                          <li>Завершенные - 0</li>
                        </ul>
                      </div>
                      </div>
                      
                      <div className={styles.project_stats}>
                        <div className={styles.project_single_stat}>
                        <Badge type='new'/>
                        <div>
                          <span className={styles.percent}>33%</span>
                          <h3>
                            новых <br />
                            10
                          </h3>
                        </div>
                        </div>
                        <div className={styles.project_single_stat}><Badge type='process'/>
                        <div>
                          <span className={styles.percent}>33%</span>
                          <h3>
                            в процессе <br />
                            10
                          </h3>
                        </div>
                        </div>
                        <div className={styles.project_single_stat}><Badge type='done'/>
                        <div>
                        <span className={styles.percent}>33%</span>
                        <h3>
                          завершенных <br />
                          10
                        </h3>
                        </div>
                        </div>
                        <div className={styles.project_single_stat}><Badge type='archive'/>
                        <div>
                        <span className={styles.percent}>33%</span>
                        <h3>
                          в архиве<br />
                          10
                        </h3>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.chart}>
                      <ResponsiveContainer width="100%" height={300}>
                      <AreaChart width={500} height={400} data={data}
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