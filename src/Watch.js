import React, { useState } from 'react'

function Watch() {
    const [timer, setTimer] = useState("00:00:00");


    const todayTime = () => {  //월 일 요일

        let now = new Date();        
        const todayMonth = now.getMonth() + 1; //왜 1을 더한거징
        const todayDate = now.getDate();
        const week = ['일','월','화','수','목','금','토'];
        const dayOfWeek = week[now.getDay()];        
// eslint-disable-next-line
        return todayMonth+'월 ' + todayDate + '일 ' + '('+dayOfWeek+')';

    }

    const currentTimer = () => { //시 분 초
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(currentTimer,10)
    }
    

    startTimer()

    return(
        <>
        <div className="date">{todayTime()}</div>
        <div className="clock">{timer}</div>
        </>
    )

        
  }

  export default Watch