import React, { useState, useEffect } from 'react';
import { Counter } from './components';
import s from './TimerPage.module.scss';

export const TimerPage = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let c = counter >= 9 ? -1 : counter;
    let interval = setInterval(() => setCounter(c + 1), 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className={s.TimerPage}>
      <div className={s.counterWrapper}>
        <Counter value={counter} />
      </div>
    </div>
  );
}
