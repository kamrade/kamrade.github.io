import React, { useEffect, useState } from 'react';
import { CounterProps } from '.';
import s from './Counter.module.scss';


// the next value appears
// the next slide get the value
// the next slide moves from the bottom (overlaying the previous slide)

// onAnimationsEnd
// the prev slide gets the value
// hide the next slide
// move the next slide to the bottom

const defaultTransition = 'transform .15s ease-in-out';

export const Counter: React.FC<CounterProps> = ({ value }) => {

  const [previousValue, setPreviousValue] = useState<number>(value);
  const [prevOffset, setPrevOffset] = useState<number>(0);
  const [nextOffset, setNextOffset] = useState<number>(100);
  const [nextOpacity, setNextOpacity] = useState<number>(1);
  const [prevTransition, setPrevTransition] = useState<string>(defaultTransition);

  useEffect(() => {
    console.log(`value changed: ${previousValue} -> ${value}`, );
    setPrevTransition(defaultTransition);
    setNextOpacity(1);
    setNextOffset(0);
    setPrevOffset(-100);
  }, [value]);

  const transitionEndHandler = () => {
    setPrevTransition('none');
    setPreviousValue(value);
    setPrevOffset(0);
    setNextOpacity(0);
    setNextOffset(100);
  }

  return (
    <div className={s.Counter}>

      <div className={s.viewport}>

        <div className={s.currentSlide} style={{
          transform: `translateY(${prevOffset}%)`,
          transition: prevTransition
        }}>
          {previousValue}
        </div>

        <div onTransitionEnd={transitionEndHandler} className={s.nextSlide} style={{
          transform: `translateY(${nextOffset}%)`,
          opacity: nextOpacity,
          transition: defaultTransition
        }}>
          {value}
        </div>

      </div>



    </div>
  );
}
