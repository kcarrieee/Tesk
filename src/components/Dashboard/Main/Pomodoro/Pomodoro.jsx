import React, {useContext, useEffect} from 'react';
import styles from '../../style.module.scss';
import { PomodoroContext } from '../../../../context/PomodoroContext';
import Settings from './Settings';
import style from './style.module.scss';
import CountDown from './CountDown';

const Pomodoro = () => {
    const {
    setIsopen,
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(PomodoroContext);

    useEffect(() => {updateExecute(executing)}, [executing, startAnimate]);

  return (
     <div className={styles.modal}
    >
        <div>
          <div className={style.heading}>
            <h3>Метод Pomodoro – это техника управления временем, позволяющая вам работать эффективно, но при этом 
            не перегружать себя.</h3>
            <svg onClick={() => setIsopen(false)}
            width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31.7897" height="31.79" rx="15.8948" fill="white"/>
            <path d="M12 12.0004L20.7896 20.79" stroke="black" stroke-linecap="round"/>
            <path d="M11.9999 20.7897L20.7896 12.0001" stroke="black" stroke-linecap="round"/>
            <rect x="0.5" y="0.5" width="31.7897" height="31.79" rx="15.8948" stroke="#EAECEE"/>
            </svg>
           </div>
            {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <button 
              className={executing.active === 'work' ? 'active-label' : undefined} 
              onClick={() => setCurrentTimer('work')} 
            >перерыв</button>
          </li>
          <li>
            <button 
              className={executing.active === 'short' ? 'active-label' : undefined} 
              onClick={() => setCurrentTimer('short')} 
            >перерыв</button>
          </li>
          <li>
            <button 
              className={executing.active === 'long' ? 'active-label' : undefined} 
              onClick={() => setCurrentTimer('long')} 
            >длинный перерыв</button>
            </li>
        </ul>
        <button onClick={SettingsBtn} >настройки</button>
        <div className="timer-container">
          <div className="time-wrapper">
              <CountDown
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountDown>
          </div>
        </div>
        <div className="button-wrapper">
          <button className={!startAnimate ? 'active' : undefined} onClick={startTimer} >Начать</button>
          <button className={startAnimate ? 'active' : undefined} onClick={pauseTimer} >Пауза</button>
        </div>
      </> : <Settings />}
        </div>
    </div>
  )
}

export default Pomodoro