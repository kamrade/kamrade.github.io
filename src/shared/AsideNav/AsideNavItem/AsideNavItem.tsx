import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AsideElement } from 'shared/AsideElement/AsideElement';
import classNames from 'classnames/bind';
import s from './AsideNavItem.module.scss';

export interface IAsideNavItemProps {
  title: string;
  link: string;
  innerPadding?: number;
}

const sx = classNames.bind(s);

export const AsideNavItem = ({ title, link, innerPadding }: IAsideNavItemProps) => {


  const location = useLocation();
  const asideNavItemClassName = sx({
    AsideNavItem: true,
    Active: location.pathname === link,
  });

  return (
    <NavLink exact to={link}>
      <AsideElement interactive={true}>
        <div className={asideNavItemClassName} style={{ paddingLeft: (innerPadding || 0) + 24 + 'px' }}>{title}</div>
      </AsideElement>
    </NavLink>
  );
}
