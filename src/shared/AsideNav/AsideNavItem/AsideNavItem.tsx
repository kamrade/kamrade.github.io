import React from 'react';
import { NavLink } from 'react-router-dom';
import { AsideElement } from 'shared/AsideElement/AsideElement';

export interface IAsideNavItemProps {
  title: string;
  link: string;
}

export const AsideNavItem = ({ title, link }: IAsideNavItemProps) => {
  return (
    <NavLink exact to={link}>
      <AsideElement interactive={true}>
        {title}
      </AsideElement>
    </NavLink>
  );
}
