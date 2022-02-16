import React, {useEffect} from 'react';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, takeUntil} from 'rxjs/operators';
import {FromEventTarget} from "rxjs/internal/observable/fromEvent";

import {Input, Button} from 'shared';

export default function RxTraining() {

  useEffect(() => {
    const search$: Observable<Event> = fromEvent<Event>(
      document.getElementById('search') as FromEventTarget<Event>,
      'input'
    );
    const stop$: Observable<Event> = fromEvent<Event>(
      document.getElementById('stop') as FromEventTarget<Event>,
      'click'
    );
    search$.pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
        map(value => value.length > 3 ? value : ''),
        distinctUntilChanged(),
        takeUntil(stop$)
      ).subscribe(value => console.log(value))
  }, []);

  return (
    <div className="page">
      <div className="container">
        <header className="pt-5 pb-3" />
        <h1 className='mb-3 page-title'>RX Training</h1>

        <div className="row">
          <div className="col-8">
            <Input type="text" id="search"/>
          </div>
          <div className="col-4">
            <Button id="stop" theme={'secondary'}>Stop</Button>
          </div>
        </div>

      </div>
    </div>
  )
}
