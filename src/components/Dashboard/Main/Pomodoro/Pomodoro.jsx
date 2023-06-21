import React, {useContext, useEffect} from 'react';
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

    useEffect(() => {
      updateExecute(executing)
    },[executing, startAnimate, updateExecute]);

  return (
     <div className={style.modal}
    >
        <div className={style.content_wrapper}>
          <div className={style.heading}>
            <div></div>
            {/* <h3>Метод Pomodoro – это техника управления временем, позволяющая вам работать эффективно.</h3> */}
            <svg className={style.close_btn} onClick={() => setIsopen(false)}
            width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31.7897" height="31.79" rx="15.8948" fill="white"/>
            <path d="M12 12.0004L20.7896 20.79" stroke="black" strokeLinecap="round"/>
            <path d="M11.9999 20.7897L20.7896 12.0001" stroke="black" strokeLinecap="round"/>
            <rect x="0.5" y="0.5" width="31.7897" height="31.79" rx="15.8948" stroke="#EAECEE"/>
            </svg>
           </div>
          
            {pomodoro !== 0 ?
      <>
        <ul className={style.labels}>
          <li>
            <button 
              className={executing.active === 'work' ? style.active_label : undefined} 
              onClick={() => setCurrentTimer('work')} 
            >работа</button>
          </li>
          <li>
            <button 
              className={executing.active === 'short' ? style.active_label : undefined} 
              onClick={() => setCurrentTimer('short')} 
            >перерыв</button>
          </li>
          <li>
            <button 
              className={executing.active === 'long' ? style.active_label : undefined} 
              onClick={() => setCurrentTimer('long')} 
            >длинный перерыв</button>
            </li>
            <li>
              <button onClick={SettingsBtn}>настройки</button>
            </li>
        </ul>
        
        <div className={style.timer_container}>
          <div className={style.timer_warpper}>
              <CountDown
                keyProp={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountDown>
          </div>
        </div>
        <div className={style.button_wrapper}>
          <button className={!startAnimate ? style.active : undefined} onClick={startTimer} >Начать</button>
          <button className={startAnimate ? style.active : undefined} onClick={pauseTimer} >Пауза</button>
        </div>
      </> : <Settings />}
        </div>
    </div>
  )
}

export default Pomodoro