import React from 'react';
import ReactDOM from 'react-dom';
import s from './Drawer.module.scss';
import { Button } from 'shared';
import { RiArrowRightSLine } from "react-icons/ri";

export interface IDrawerProps {
  showDrawer: boolean;
  setShowDrawer: any;
  drawerTitle: string;
  children: any;
  initialWidth?: number;
}

export const Drawer: React.FC<IDrawerProps> = ({ children, showDrawer, setShowDrawer, drawerTitle, initialWidth }) => {

  const hideDrawer = () => {
    setShowDrawer(false);
  }

  return ReactDOM.createPortal(
    (showDrawer &&
      (

        <div className={s.Drawer} style={{ width: `${initialWidth ? `${initialWidth}px` : 'auto'}`}}>
          <div className={s.DrawerContent}>

            <div className={s.DrawerControl}>
              <Button iconButton size={'sm'} theme={'base'} variant={'light'} prefix={<RiArrowRightSLine/>} onClick={hideDrawer}/>
            </div>

            <h3>{drawerTitle}</h3>
            {children}

          </div>
        </div>

      )),
    document.getElementById('drawer-root') as HTMLDivElement
  );
}