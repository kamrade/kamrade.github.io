import React, {useEffect, useState, useRef} from 'react';
import {fromEvent, Observable, BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, takeUntil, takeWhile} from 'rxjs/operators';
import {FromEventTarget} from "rxjs/internal/observable/fromEvent";
import {Input, Button, Switcher} from 'shared';

export default function RxTraining() {

  const searchInputRef = useRef();
  const stopButtonRef  = useRef();
  const togglerRef     = useRef(); // unused

  const [formValue, setFormValue] = useState('');
  const [isCompleted, setIsCompleted] = useState<boolean>(true);
  const [stream, setStream] = useState<boolean>(true);

  // let toggle$: BehaviorSubject<boolean>;
  let toggle$ = useRef<BehaviorSubject<boolean>>();

  // component Did Mount
  useEffect(() => {

    const search$: Observable<Event> = fromEvent<Event>(
      searchInputRef.current as unknown as FromEventTarget<Event>,
      'input'
    );

    const stop$: Observable<Event> = fromEvent<Event>(
      stopButtonRef.current as unknown as FromEventTarget<Event>,
      'click'
    );

    toggle$.current = new BehaviorSubject<boolean>(stream);
    toggle$.current.pipe(
      map(value => value)
    );

    search$.pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
        map(value => value.length > 3 ? value : ''),
        distinctUntilChanged(),
        takeUntil( stop$ ),
        takeWhile(n => {
          return toggle$?.current?.value === true;
        })
      ).subscribe({
        next: (value) => setFormValue(value),
        error: (err) => console.log('Error', err),
        complete: () => setIsCompleted(false)
      });

  }, [stream]);

  useEffect(() => {
    toggle$?.current?.next(stream);
  }, [stream]);

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
              <Button id="stop" theme='base' ref={stopButtonRef}>Stop</Button>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-24">
            <div className="pb-3">
              <Switcher ref={togglerRef} onChange={() => setStream(!stream)} checked={stream}>
                Toggle stream <span className={'text-muted'}>(doesn't work yet)</span>
              </Switcher>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-24">
            <div className="pb-3">
              <span className={'text-muted'}>Completed: </span> {isCompleted ? 'false' : 'true'}
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
