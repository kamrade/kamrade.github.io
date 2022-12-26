import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import s from './MainPage.module.scss';

import {MainPageContent} from './MainPageContent';
import {AboutPage} from 'pages/AboutPage/AboutPage';
import {ContactsPage} from 'pages/ContactsPage/ContactsPage';
import {ExtremeWaves} from './Portfolio/ExtremeWaves';
import {B2B} from './Portfolio/B2B';
import {Mbank} from './Portfolio/Mbank';
import {TurnoversFlow} from "./Portfolio/TurnoversFlow";
import {ScrambledText} from "shared/ScrambledText";

export const MainPage = () => {

  return (
    <>
      <div className={`container`}>

        <header className={s.Header}>
          <div className={s.Title}>
            <div className={s.Description}>D. Mykhailov. Seasoned UX designer</div>
            <ScrambledText
              slideLength={2000}
              value={[
                '[ Product design ]',
                '[ Prototyping ]',
                '[ Infographic ]',
                '[ Design systems ]',
                '[ React/Angular components ]',
                '[ Business and system analytics ]',
              ]}
            />
          </div>
          <div className={s.Menu}>
            <div className={s.MenuItem}><NavLink exact to='/main'>Home</NavLink></div>
            <div className={s.MenuItem}><NavLink exact to='/main/contacts'>Contacts</NavLink></div>
            <div className={s.MenuItem}><NavLink exact to='/main/about'>About</NavLink></div>
          </div>
        </header>
      </div>

      <Switch>
        <Route exact path='/main'><MainPageContent /></Route>
        <Route path='/main/about'><AboutPage /></Route>
        <Route path='/main/contacts'><ContactsPage /></Route>
        <Route path='/main/portfolio/extreme-waves'><ExtremeWaves /></Route>
        <Route path='/main/portfolio/b2b'><B2B /></Route>
        <Route path='/main/portfolio/mbank'><Mbank /></Route>
        <Route path='/main/portfolio/turnovers-flow'><TurnoversFlow /></Route>
      </Switch>


    </>
  );
}
