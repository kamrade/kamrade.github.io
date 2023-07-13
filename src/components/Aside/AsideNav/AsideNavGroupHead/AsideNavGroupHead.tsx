import React from 'react';
import { AsideElement } from 'components/Aside/AsideElement/AsideElement';
import {RiArrowDownSLine, RiArrowRightSLine} from 'react-icons/ri';

import { colors } from 'config/colors';

import classNames from 'classnames/bind';
import s from './AsideNavGroupHead.module.scss';
const sx = classNames.bind(s);

export interface IAsideNavGroupHeadProps {
  groupState: boolean;
  title: string;
  innerPadding?: number;
  active? : boolean;
}

export const AsideNavGroupHead = ({ groupState, title, innerPadding, active }: IAsideNavGroupHeadProps) => {

  const asideNavItemClassNames = sx({
    AsideNavGroupHead: true,
    Active: active && !groupState
  });

  return (
    <AsideElement interactive={true}>
      <div className={asideNavItemClassNames} style={{ paddingLeft: (innerPadding || 0) + 'px' }}>

        <span className={'pr-1'}>
          {groupState && <RiArrowDownSLine color={colors.gray600} /> }
          {!groupState && <RiArrowRightSLine color={colors.gray400} /> }
        </span>
        {title}

      </div>
    </AsideElement>
  );
}
