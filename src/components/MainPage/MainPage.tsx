import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MainPage.module.scss';
import classNames from "classnames/bind";
const sx = classNames.bind(s);

export const MainPage = () => {


  return (
    <div className={`container`}>
      <header className={s.Header}>
        <div className={s.Title}>Dennis Mikhailov</div>
        <div className={s.Menu}>
          <div className={s.MenuItem}>My works</div>
          <div className={s.MenuItem}>Contacts</div>
          <div className={s.MenuItem}>About</div>
          <div className={s.MenuItem}><NavLink exact to='/apps/typing'>Showcase</NavLink></div>
        </div>
      </header>

      <div className={s.Body}>
        <h1>
          Create <span className={s.Milq}>products</span> <br />
          for the perfect experience
        </h1>
        <p className={s.Desc}>
          I am happy to work with enthusiasts, designers, visual artists and developers who envolved in digital transformation of the World
        </p>
      </div>


      <div className='row'>
        <div className='col-md-8'>
          <div className={s.Box}></div>
        </div>
        <div className='col-md-8'>
          <div className={s.Box}></div>
        </div>
        <div className='col-md-8'>
          <div className={s.Box}></div>
        </div>
      </div>

    </div>
  );
}
