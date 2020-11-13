import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';

import Wheelson from './projects/Wheelson/Wheelson';
import Exchange from './projects/Exchange/Exchange';
import NoMatch from './projects/NoMatch/NoMatch';

import s from './App.module.scss';

import { Aside } from './shared/Aside/Aside';
import { Icon } from 'shared/Icon/Icon';
import { Button } from 'shared/Button/Button';

import { useWindowSize } from 'hooks/useWindowSize';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

const sx = classNames.bind(s);

function App() {

  const size = useWindowSize();
  const [ showAside, setShowAside ] = useState(true);
  const [ showAsideMemo, setShowAsideMemo ] = useState(true);

  const refAside = useRef<HTMLDivElement>(null);
  const refAsideToggler = useRef<HTMLDivElement>(null);

  // it should work only for small screens and when Aside is showed (to hide it)
  useOnClickOutside([refAside, refAsideToggler], () => {
    setShowAside(false);
  }, (showAside && size.width < 992));

  // hide aside when after window resizing screen width become smaller than 992 (lg-breakpoint)
  useEffect(() => {
    if (size.width && size.width < 992) {
      setShowAsideMemo(showAside);
      setShowAside(false);
    } else {
      setShowAside(showAsideMemo);
    }
  
    // eslint-disable-next-line
  }, [ size.width ]);

  return (
    <div className={s.Main}>
      
      <div className={s.AsideToggler} ref={refAsideToggler}>
        <Button onClick={ () => setShowAside(!showAside) }>
          <Icon color="#212529" icon="hamburger" size={24} stroke={2} />
        </Button>
      </div>

      
      <Aside isShowing={showAside} ref={refAside} hide={ () => setShowAside(false) }/>

      <div className={sx({
        Content: true,
        ContentExpanded: !showAside
      })}>
        <Switch>
          <Route exact path='/'><Redirect to='/wheelson' /></Route>
          <Route exact path='/wheelson'><Wheelson /></Route>
          <Route exact path='/exchange'><Exchange /></Route>
          <Route path="**"><NoMatch /></Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
