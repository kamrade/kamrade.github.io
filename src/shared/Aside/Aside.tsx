// Sidebar component

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import s from './Aside.module.scss';

import { UserBlock } from 'shared/UserBlock/UserBlock';
import { AsideElement } from 'shared/AsideElement/AsideElement';

const sx = classNames.bind(s);

export interface IAsideProps {
  isShowing: boolean;
};

export const Aside = ({ isShowing }: IAsideProps) => {

  const [ isDisplaying, setIsDisplaying ] = useState(true);

  const asideClassNames = sx({
    Aside: true,
    AsideHiddenAnimate: !isShowing,
    AsideHidden: !isDisplaying,
    AsideShowedAnimate: isShowing
  });

  useEffect(() => {
    if (isShowing) {
      setIsDisplaying(isShowing);
    }
  }, [ isShowing ]);

  const handleAnimationEnd = () => {
    if (!isShowing) {
      setIsDisplaying(isShowing);
    }
  }

  return (
    <aside className={asideClassNames} onAnimationEnd={ handleAnimationEnd }>

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