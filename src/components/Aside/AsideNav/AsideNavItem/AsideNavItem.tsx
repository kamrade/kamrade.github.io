import React from 'react';

import { NavLink } from 'react-router-dom';
import { AsideElement } from 'components/Aside/AsideElement/AsideElement';

export interface IAsideNavItemProps {
  title: string;
  link: string;
  innerPadding?: number;
}

export const AsideNavItem = ({ title, link, innerPadding }: IAsideNavItemProps) => {

  return (
    <NavLink exact to={link}>
      <AsideElement interactive={true}>
        <div style={{ paddingLeft: (innerPadding || 0) + 24 + 'px' }}>{title}</div>
      </AsideElement>
    </NavLink>
  );
}
