import React, { useState,useEffect, useRef } from 'react'
import upBtn from '../../assets/upbtn.png'
import downBtn from '../../assets/downbtn.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import style from './Timer.module.css'
import sound from '../../assets/audio.mp3'


const Timer=()=> {
  const [hours ,setHour]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [seconds,setSeconds]=useState(0);
  const [isStart, setIsStart] = useState(false);
  const [audio] = useState(new Audio(sound));
  // const [timerSecond,setTimerSecond]=useState(0);
  // const initialRender=useRef(false)
  
  const TimerComponent = ({ timerKey, size, strokeWidth ,isStart }) => (
    
    <CountdownCircleTimer
      key={timerKey}
      size={size}
      strokeWidth={strokeWidth}
      isPlaying={isStart}
      
      duration={hours * 3600 + minutes * 60 + seconds}
      colors={["#FF6A6A"]}
      onComplete={() => {
      // Timer has completed, set isStart to false
        setIsStart(false);
        setHour(0);
        setMinutes(0);
        setSeconds(0);
        // if (!initialRender.current) {
          audio.play();
          setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
          }, 5000);
        // } else {
        //   initialRender.current = false;
        // }
      }}
    >
      {({ remainingTime }) => {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      return (
        <>
        <div style={{display:"flex",
        fontSize:"4vh"}}>
          <div>{String(hours).padStart(2, '0')}{":"}</div>
          <div>{String(minutes).padStart(2, '0')}{":"}</div>
          <div>{String(seconds).padStart(2, '0')} </div>
        </div>
        </>
      );
    }}
    </CountdownCircleTimer>
  );
  const increseHour=()=>{
    setHour((hours)=>hours+1)
  }
  const decrseHour=()=>{
    setHour((hour) => Math.max(0, hour - 1));
  }
  const incresseMinutes=()=>{
      setMinutes((minutes)=>minutes+1)
  }
  const decreseMinutes=()=>{
    setMinutes((minutes) => Math.max(0, minutes - 1));
}
  const incresseSeconds=()=>{
    setSeconds((seconds)=>seconds+1)
  }
  const decreseSeconds=()=>{
    setSeconds((seconds) => Math.max(0, seconds - 1));
  }
 
  const handleStartStopClick = () => {
    setIsStart(!isStart)
    
    if(isStart===true){
      setHour(0)
      setMinutes(0)
      setSeconds(0)
    }
    // if (!isStart) {
    //   // Reset the timer when stopping
    //   setHour(0);
    //   setMinutes(0);
    //   setSeconds(0);
    // }

  };
  
  useEffect(() => {
    if (hours===0 && minutes ===0 && seconds ===0) {
      setIsStart(false);
    } 
    // setHour(0)
    // setMinutes(0)
    // setSeconds(0)
  }, [isStart]);
  return (
    <div className={style.main_container}>
        <div className={style.timer_circle}>
            <TimerComponent 
            timerKey={10} 
            size={270} 
            strokeWidth={8} 
            hours={hours} 
            minutes={minutes}
            seconds={seconds}
            isStart={isStart}
            />
        </div>
        <div className={style.timer_controller}>
            <div className={style.hour_controller}>
                 <p className={style.heading}>Hours</p>
                 <button className={style.up_Button}><img src={upBtn}
                 onClick={increseHour}/></button>
                 <div className={style.show_settimer}>
                      {hours<10?"0"+hours:hours}
                 </div>
                 <button className={style.down_button} onClick={decrseHour}><img src={downBtn}/></button>
            </div>
            <p className={style.colon_symbol}>:</p>
            <div className={style.hour_controller}>
                 <p className={style.heading}>Minutes</p>
                 <button className={style.up_Button} onClick={incresseMinutes}><img src={upBtn}/></button>
                 <div className={style.show_settimer}>
                     {minutes<10?"0"+minutes:minutes}
                 </div>
                 <button className={style.down_button} onClick={decreseMinutes}><img src={downBtn}/></button>
            </div>
            <p className={style.colon_symbol}>:</p>
            <div className={style.hour_controller}>
                 <p className={style.heading}>Seconds</p>
                 <button className={style.up_Button} onClick={incresseSeconds}><img src={upBtn} /></button>

                 <div className={style.show_settimer}>
                     {seconds<10?"0"+seconds:seconds}
                 </div>
                 <button className={style.down_button} onClick={decreseSeconds}><img src={downBtn}/></button>
            </div>
        </div>
        <button className={style.timer_start} onClick={handleStartStopClick}>{isStart? 'Stop' : 'Start'}</button>
        
    </div>
  )
}

export default Timer