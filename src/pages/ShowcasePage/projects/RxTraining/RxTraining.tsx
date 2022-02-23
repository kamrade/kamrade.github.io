import React, {useEffect, useState, useRef} from 'react';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, takeUntil} from 'rxjs/operators';
import {FromEventTarget} from "rxjs/internal/observable/fromEvent";
import {Input, Button, Switcher} from 'shared';

export default function RxTraining() {

  const searchInputRef = useRef();
  const stopButtonRef  = useRef();
  const togglerRef     = useRef(); // unused

  const [formValue, setFormValue] = useState('');
  const [searchFormIsOn, setSearchFormIsOn] = useState(true);
  const [stream, setStream] = useState(true);

  // component Did Mount
  useEffect(() => {

    const search$: Observable<Event> = fromEvent<Event>(
      // document.getElementById('search') as FromEventTarget<Event>,
      searchInputRef.current as unknown as FromEventTarget<Event>,
      'input'
    );

    const stop$: Observable<Event> = fromEvent<Event>(
      // document.getElementById('stop') as FromEventTarget<Event>,
      stopButtonRef.current as unknown as FromEventTarget<Event>,
      'click'
    );

    search$.pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
        map(value => value.length > 3 ? value : ''),
        distinctUntilChanged(),
        takeUntil(stop$)
      ).subscribe({
        next: (value) => setFormValue(value),
        error: (err) => console.log('Error', err),
        complete: () => setSearchFormIsOn(false)
      });

  }, []);

  useEffect(() => {
    console.log('New form value:', formValue);
  }, [formValue])

  return (
    <div className="page">
      <div className="container">
        <header className="pt-5 pb-3" />
        <h1 className='mb-3 page-title'>RX Training</h1>

        <div className="row">
          <div className="col-8">
            <div className="pb-3">
              <Input type="text" id="search" ref={searchInputRef}/>
            </div>
          </div>
          <div className="col-8">
            <div className="pb-3">
              <Button id="stop" theme={'secondary'} ref={stopButtonRef}>Stop</Button>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-24">
            <div className="pb-3">
              <Switcher ref={togglerRef} onChange={() => setStream(!stream)} checked={stream}>Toggle stream</Switcher>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-24">
            <div className="pb-3">
              Subscriber is: {searchFormIsOn ? 'active' : 'off'}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-24">
            <div className="pb-3">
              <span className={'text-muted'}>Current value: </span>{formValue ? formValue : <span className={'text-muted'}>Nothing entered</span> }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
