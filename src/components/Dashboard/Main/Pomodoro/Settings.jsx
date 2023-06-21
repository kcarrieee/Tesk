import React, { useContext } from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { PomodoroContext } from '../../../../context/PomodoroContext';


const Settings = () => {
   const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: 'work'
   });
   const { updateExecute } = useContext(PomodoroContext);

   const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
        case 'work':
            setNewTimer({
                ...newTimer,
                work: Number(value)})
            break;
        case 'shortbreak':
            setNewTimer({
                ...newTimer,
                short: Number(value)})
            break;
        case 'longbreak':
            setNewTimer({
                ...newTimer,
                long: Number(value)})
            break;
        default:
            break;
    }
   }
   
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer);
    }
  return (
    <>
    <h3 className={style.header}>Метод Pomodoro – это эффективная техника управления временем.<span> Обычно 25 минут занимает работа, а когда время заканчивается, то перерыв 5 минут или более. И так несколько раз.</span>  </h3>
     <form>
            <div className={style.input_wrapper}>
                <input name='work' onChange={handleChange} value={newTimer.work}/>
                <input name='shortbreak' onChange={handleChange} value={newTimer.short}/>
                <input name='longbreak' onChange={handleChange} value={newTimer.long}/>
            </div>
            <button onClick={handleSubmit}>установить таймер</button>
        </form>
    </>
       
  )
}

export default Settings;