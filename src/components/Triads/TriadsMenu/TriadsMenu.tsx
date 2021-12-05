import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './TriadsMenu.module.scss';

interface ITriadsMenu {
  setShowMenu: (showMenu: boolean) => void;
  showMenu: boolean;
}

const TriadsMenu: React.FC<ITriadsMenu> = ({setShowMenu, showMenu}) => {

  useEffect(() => {

    const keyHandler = (e: any) => {
      if (e.key === 'Escape') {
        setShowMenu(false);
      }
    }

   document.addEventListener('keydown', keyHandler);

   return () => {
     document.removeEventListener('keydown', keyHandler);
   }

  }, [setShowMenu]);

  const hideMenu = () => {
    setShowMenu(false);
  }

  return (
    <div className={s.TriadsMenu}>
      <div className={s.TriadsMenuContent}>
        <h3 className={s.TriadsMenuTitle}>The Triads</h3>
        
        <NavLink exact to='/triads/random' onClick={hideMenu}>
          <button type='button' className={s.TriadMenuButton}>
            Random board
          </button>
        </NavLink>
        
        <NavLink exact to='/triads/career' onClick={hideMenu}>
          <button type='button' className={s.TriadMenuButton}>
            Career
          </button>
        </NavLink>

        <div className={s.controlBlock}>
          <button type='button' className={s.TriadMenuButton} style={{color: 'white'}} onClick={hideMenu}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export { TriadsMenu };