import React, { useState, useEffect } from 'react';

function Timer({ tiempoRestante }) {
  const [timeRemaining, setTimeRemaining] = useState('');
  let content = null
  useEffect(() => {
    const timezoneOffset = -5 * 60 * 60 * 1000; // GMT-05:00 in milliseconds
    const endDate = new Date(tiempoRestante);

    const interval = setInterval(() => {
      const startDate = new Date().getTime() + timezoneOffset;
      const remainingTime = endDate - startDate;

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeRemaining(["00", "00", "00"]);
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setTimeRemaining(
          [hours, minutes, seconds]
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [tiempoRestante]);

  if(timeRemaining){
    content = timeRemaining;
  } else {
    content = ["00", "00", "00"]
  }

  return (
    <div className='timer-cont justify-items-center justify-center grid grid-cols-3 gap-3'>
        <div className='timer-group'>
            <div className='value hours'>{content[0]}</div>
            <div className='unit'>Hours</div>
        </div>
        <div className='timer-group'>
            <div className='value minutes'>{content[1]}</div>
            <div className='unit'>Minutes</div>
        </div>
        <div className='timer-group'>
            <div className='value seconds'>{content[2]}</div>
            <div className='unit'>Seconds</div>
        </div>
    </div>
  )
}

export default Timer;
