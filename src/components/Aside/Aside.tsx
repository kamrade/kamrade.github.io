// Sidebar component

import React, { useState, useEffect, ForwardedRef } from 'react';
import classNames from 'classnames/bind';
import s from './Aside.module.scss';
import { UserBlock } from 'shared/UserBlock/UserBlock';
import { Button } from 'shared';
import { AsideNav } from 'components/Aside/AsideNav/AsideNav';
import { NavLink } from 'react-router-dom';
import {RiArrowLeftLine} from "react-icons/ri";

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
          <Button prefix={<RiArrowLeftLine />} variant={'light'} theme={'base'} size={'sm'}>back to the website</Button>
        </NavLink>

      </div>
      <UserBlock username="Dennis" companyName="Muzq" />
      <AsideNav />

    </aside>
  );
});
