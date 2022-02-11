import React, {ChangeEvent, useEffect, useState} from 'react';
import {from, of, Observable} from 'rxjs';
import {map, filter, mergeMap, delay} from 'rxjs/operators';
import {Input} from "shared";

function useObservable<T>(observable: Observable<T>, setter: (value: T) => void) {
  useEffect(() => {
    let subscription = observable.subscribe(result => setter(result));
    return () => subscription.unsubscribe();
  }, [observable, setter]);
}

let numbersObservable: Observable<number> = from([1,2,3,4,5]);
let squareNumbers: Observable<number> = numbersObservable.pipe(
  filter(val => val > 2),
  mergeMap(val => from([val]).pipe(delay(1000 * val))),
  map(val => val * val)
);

const getData = (param: number) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(param * 1000)
  );
}

export default function RxTutorial() {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    let obs = from([1,2,3,4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log(val));

    return () => obs.unsubscribe();
  }, [])

  // this hook will automatically unsubscribe when component will unmount
  useObservable(squareNumbers, setCurrentNumber);

  return (
    <div className="page">
      <header className="pt-5 pb-3" />

      <div className="container">
        <h1 className='mb-3 page-title'>Rx Tutorial: {currentNumber}</h1>

        <Input
          name='origin'
          placeholder='Origin'
          type='text'

          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />

      </div>

    </div>
  )
}
