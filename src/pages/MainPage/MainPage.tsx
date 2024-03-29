import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import s from './MainPage.module.scss';

import {MainPageContent} from './MainPageContent';
import {AboutPage} from 'pages/AboutPage/AboutPage';
import {ContactsPage} from 'pages/ContactsPage/ContactsPage';
import {ScrambledText} from "shared/ScrambledText";

import { extremeWaves, b2bCards, mBank, turnoversFlow, PortfolioPage } from './Portfolio';

export const MainPage = () => {

  return (
    <div>
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

        <Route path='/main/portfolio/extreme-waves'>
          <PortfolioPage images={extremeWaves} />
        </Route>
        <Route path='/main/portfolio/b2b'>
          <PortfolioPage images={b2bCards} />
        </Route>
        <Route path='/main/portfolio/mbank'>
          <PortfolioPage images={mBank} />
        </Route>
        <Route path='/main/portfolio/turnovers-flow'>
          <PortfolioPage images={turnoversFlow} />
        </Route>

      </Switch>

    </div>
  );
}
