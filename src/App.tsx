import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {AuthPage} from 'pages/AuthPage/AuthPage';
import {MainPage} from 'pages/MainPage/MainPage';
import {Main} from 'pages/ShowcasePage/ShowcasePage';
import TriadsPage from 'pages/Triads/TriadsPage';

import s from './App.module.scss';
import NoMatch from "pages/ShowcasePage/projects/NoMatch/NoMatch";
import {TimerPage} from "./pages/Timer/TimerPage";
import {FloatingButton} from "shared";
import {RiHomeLine} from "react-icons/ri";

function App() {

  return (
    <div className={s.Root}>

      <Switch>
        <Route exact path='/'><Redirect to='/main' /></Route>
        <Route path='/main'><MainPage /></Route>
        <Route path='/auth'><AuthPage /></Route>
        <Route path={'/apps'}><Main /></Route>
        <Route path={'/triads'}><TriadsPage /></Route>
        <Route path={'/timer'}><TimerPage /></Route>
        <Route path="**"><NoMatch /></Route>
      </Switch>

      <FloatingButton><RiHomeLine /></FloatingButton>


    </div>
  );
}

export default App;
