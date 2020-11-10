// Sidebar component

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.scss';

import { UserBlock } from 'shared/UserBlock/UserBlock';
import { AsideElement } from 'shared/AsideElement/AsideElement';

export const Aside = () => {
  return (
    <aside className={s.Aside}>

      <UserBlock username="Dennis" companyName="Muzq" />

      <AsideElement>
        <NavLink exact to="/wheelson">
          Wheelson
        </NavLink>
      </AsideElement>
      
      <AsideElement>
        <NavLink exact to="/exchange">
          Exchange
        </NavLink>
      </AsideElement>

    </aside>
  );
}