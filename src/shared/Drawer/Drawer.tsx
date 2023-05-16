import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Drawer.module.scss';
import classNames from 'classnames/bind';
import { Button } from 'shared';
import { RiArrowRightSLine } from "react-icons/ri";

let sx = classNames.bind(s);

export interface IDrawerProps {
  showDrawer: boolean;
  setShowDrawer: any;
  drawerTitle: string;
  children: any;
  initialWidth?: number;
}

export const Drawer: React.FC<IDrawerProps> = ({ children, showDrawer, setShowDrawer, drawerTitle, initialWidth }) => {

  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showDrawer) {
      setVisible(true);
      setTimeout(() => setAnimated(true));
    } else {
      setAnimated(false);
    }
  }, [showDrawer]);

  const hideDrawer = () => {
    setShowDrawer(false);
  }

  const transitionEndHandler = () => {
    if (!showDrawer) {
      setVisible(false);
    }
  }

  return ReactDOM.createPortal(

    visible && (

      <div className={sx({
        Drawer: true,
        animated: animated,
      })} style={{ width: `${initialWidth ? `${initialWidth}px` : 'auto'}`}}
           onTransitionEnd={transitionEndHandler}
      >

        <div className={s.DrawerContent}>

          <div className={s.DrawerControl}>
            <Button iconButton size={'sm'} theme={'base'} variant={'light'} prefix={<RiArrowRightSLine/>} onClick={hideDrawer}/>
          </div>

          <h4 className={'mb-2'}>{drawerTitle}</h4>
          {children}

        </div>

      </div>

  ), document.getElementById('drawer-root') as HTMLDivElement);
}
