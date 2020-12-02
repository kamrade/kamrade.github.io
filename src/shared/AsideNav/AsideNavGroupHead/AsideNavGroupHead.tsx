import React from 'react';
import { AsideElement } from 'shared/AsideElement/AsideElement';
import { Icon } from 'shared/Icon/Icon';
import classNames from 'classnames/bind';
import s from './AsideNavGroupHead.module.scss';

const sx = classNames.bind(s);

export interface IAsideNavGroupHeadProps {
  groupState: boolean;
  title: string;
  innerPadding?: number;
  activeRoute?: boolean;
}

export const AsideNavGroupHead = ({ groupState, title, innerPadding, activeRoute }: IAsideNavGroupHeadProps) => {

  const asideNavItemClassNames = sx({
    AsideNavGroupHead: true,
    Active: activeRoute,
  });

  return (
    <AsideElement interactive={true}>
      <div className={asideNavItemClassNames} style={{ paddingLeft: (innerPadding || 0) + 'px' }}>
        <Icon color={groupState ? '#007bff' : '#212529'  } icon={groupState ? 'chevronDown' : 'chevronRight'} size={20} stroke={1.5} />
        {title}
      </div>
    </AsideElement>
  );
}
