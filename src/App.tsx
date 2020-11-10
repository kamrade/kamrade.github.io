import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wheelson from './projects/Wheelson/Wheelson';
import Exchange from './projects/Exchange/Exchange';
import NoMatch from './projects/NoMatch/NoMatch';

import s from './App.module.scss';

import { Aside } from './shared/Aside/Aside';

function App() {
  return (
    <div className={s.Main}>
      <Aside />

      <div className={s.Content}>
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
