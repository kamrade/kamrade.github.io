import React from 'react';
import { AsideElement } from 'shared/AsideElement/AsideElement';
import { Icon } from 'shared/Icon/Icon';

export interface IAsideNavGroupProps {
  groupState: boolean;
  title: string;
}

export const AsideNavGroup = ({ groupState, title }: IAsideNavGroupProps) => {
  return (
    <AsideElement interactive={true}>
      <Icon color={groupState ? '#007bff' : '#212529'  } icon={groupState ? 'chevronDown' : 'chevronRight'} size={20} stroke={1.5} />
      {title}
    </AsideElement>
  );
}
