import React from 'react';
import { useContext } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PomodoroContext } from '../../../../context/PomodoroContext';


const CountDown = ({keyProp, timer, animate, children}) => {

    const { stopAimate } = useContext(PomodoroContext);


  return (
    <>
     <CountdownCircleTimer
        key={keyProp}
        isPlaying={animate}
        duration={timer * 60}
        colors='#111111'
        strokeWidth={6}
        size={150}
        trailColor="#ffffff"
        onComplete={ () => {
          stopAimate()
        }}
      >
           {children}
      </CountdownCircleTimer>
    </>
  )
}

export default CountDown;