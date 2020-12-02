import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AsideElement } from 'shared/AsideElement/AsideElement';

export interface IAsideNavItemProps {
  title: string;
  link: string;
  innerPadding?: number;
}

export const AsideNavItem = ({ title, link, innerPadding }: IAsideNavItemProps) => {

  const location = useLocation();
  location.pathname === link && console.log(title);

  return (
    <NavLink exact to={link}>
      <AsideElement interactive={true}>
        <div style={{ paddingLeft: (innerPadding || 0) + 24 + 'px' }}>{title}</div>
      </AsideElement>
    </NavLink>
  );
}
