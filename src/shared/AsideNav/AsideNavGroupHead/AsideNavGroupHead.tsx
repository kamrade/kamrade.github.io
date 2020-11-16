import React from 'react';
import { AsideElement } from 'shared/AsideElement/AsideElement';
import { Icon } from 'shared/Icon/Icon';

export interface IAsideNavGroupHeadProps {
  groupState: boolean;
  title: string;
}

export const AsideNavGroupHead = ({ groupState, title }: IAsideNavGroupHeadProps) => {
  return (
    <AsideElement interactive={true}>
      <Icon color={groupState ? '#007bff' : '#212529'  } icon={groupState ? 'chevronDown' : 'chevronRight'} size={20} stroke={1.5} />
      {title}
    </AsideElement>
  );
}
