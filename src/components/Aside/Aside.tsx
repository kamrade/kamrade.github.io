// Sidebar component

import React, { useState, useEffect, ForwardedRef } from 'react';
import classNames from 'classnames/bind';
import s from './Aside.module.scss';
import { UserBlock } from 'shared/UserBlock/UserBlock';
import { Button, Icon } from 'shared';
import { AsideNav } from 'components/Aside/AsideNav/AsideNav';
import { NavLink } from 'react-router-dom';

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

      <div className='ml-4 mt-4'>

        <NavLink exact to='/main'>
          <Button>
            <span className='text-muted'>
              <Icon stroke={1.5} size={20} icon='chevronLeft'></Icon>
              back to the website
            </span>
          </Button>
        </NavLink>

      </div>
      <UserBlock username="Dennis" companyName="Muzq" />
      <AsideNav />

    </aside>
  );
});
