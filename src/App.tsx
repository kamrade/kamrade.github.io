import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';

import Wheelson from './projects/Wheelson/Wheelson';
import Exchange from './projects/Exchange/Exchange';
import NoMatch from './projects/NoMatch/NoMatch';

import s from './App.module.scss';

import { Aside } from './shared/Aside/Aside';
import { Icon } from 'shared/Icon/Icon';
import { Button } from 'shared/Button/Button';

const sx = classNames.bind(s);

function App() {

  const [ showAside, setShowAside ] = useState(true);

  return (
    <div className={s.Main}>
      
      <div className={s.AsideToggler}>
        <Button onClick={ () => setShowAside(!showAside) }>
          <Icon color="#212529" icon="hamburger" size={24} stroke={2} />
        </Button>
      </div>

      <Aside isShowing={showAside} />

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
