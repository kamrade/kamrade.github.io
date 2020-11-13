// Sidebar component

import React, { useState, useEffect, ForwardedRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import s from './Aside.module.scss';

import { UserBlock } from 'shared/UserBlock/UserBlock';
import { AsideElement } from 'shared/AsideElement/AsideElement';

const sx = classNames.bind(s);

export interface IAsideProps {
  isShowing: boolean;
  hide: () => void;
};

export const Aside = React.forwardRef(({ isShowing, hide }: IAsideProps, ref: ForwardedRef<HTMLDivElement>) => {

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
    <aside ref={ref} className={asideClassNames} onAnimationEnd={ handleAnimationEnd }>

      <UserBlock username="Dennis" companyName="Muzq" />

      <AsideElement hide={hide}>
        <NavLink exact to="/wheelson">
          Wheelson
        </NavLink>
      </AsideElement>
      
      <AsideElement hide={hide}>
        <NavLink exact to="/exchange">
          Exchange
        </NavLink>
      </AsideElement>

    </aside>
  );
});