import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import s from './MainPage.module.scss';

import {MainPageContent} from './MainPageContent';
import {AboutPage} from 'components/AboutPage/AboutPage';
import {ContactsPage} from 'components/ContactsPage/ContactsPage';
// import classNames from "classnames/bind";
// const sx = classNames.bind(s);


export const MainPage = () => {


  return (
    <>
      <div className={`container`}>

        <header className={s.Header}>
          <div className={s.Title}>Dennis Mikhailov</div>
          <div className={s.Menu}>
            <div className={s.MenuItem}><NavLink exact to='/main'>Home</NavLink></div>
            <div className={s.MenuItem}><NavLink exact to='/main/contacts'>Contacts</NavLink></div>
            <div className={s.MenuItem}><NavLink exact to='/main/about'>About</NavLink></div>
            <div className={s.MenuItem}><NavLink exact to='/apps'>Showcase</NavLink></div>
            <div className={s.MenuItem}><NavLink exact to='/triads/random'>Triads</NavLink></div>
          </div>
        </header>
      </div>

      <Switch>
        <Route exact path='/main'><MainPageContent /></Route>
        <Route path='/main/about'><AboutPage /></Route>
        <Route path='/main/contacts'><ContactsPage /></Route>
      </Switch>


    </>
  );
}
