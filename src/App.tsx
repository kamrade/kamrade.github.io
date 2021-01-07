import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Auth} from 'components/Auth/Auth';
import {Main} from 'components/Main/Main';

import s from './App.module.scss';
import NoMatch from "projects/NoMatch/NoMatch";

function App() {

  return (
    <div className={s.Root}>

      <Switch>
        <Route exact path='/'><Redirect to='/apps/formaline' /></Route>
        <Route path='/auth'><Auth /></Route>
        <Route path={'/apps'}><Main /></Route>
        <Route path="**"><NoMatch /></Route>
      </Switch>

    </div>
  );
}

export default App;
