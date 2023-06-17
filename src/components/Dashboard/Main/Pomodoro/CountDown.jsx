import React from 'react';
import { useContext } from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../../../context/PomodoroContext';

const CountDown = ({key, timer, animate, children}) => {

    const { stopAimate } = useContext(PomodoroContext);

  return (
    <>
     <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#111111', 0.33],
          ['#111111', 0.33],
          ['#111111', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#fff"
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