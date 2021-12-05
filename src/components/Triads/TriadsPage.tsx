import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Button, Icon } from 'shared';

import { triadColors } from './TriadNode/TriadNode.types';
import { TriadsMenu } from './TriadsMenu/TriadsMenu';
import { RandomMode } from './RandomMode';

import s from './TriadsPage.module.scss';

const TriadsPage: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {

    const keyHandler = (e: any) => {
      if (e.key === 'Escape') {
        setShowMenu(true);
      }
    }

   document.addEventListener('keydown', keyHandler);

   return () => {
     document.removeEventListener('keydown', keyHandler);
   }

  }, [setShowMenu]);

  return (
    <div className={s.TriadsPage}>

      {/* Link back */}
      <div className={s.BackLink}>
        <NavLink exact to='/main'>
          <Button>
            <span style={{color: 'white'}}>
              <Icon color={'white'} stroke={1.5} size={20} icon='chevronLeft'></Icon>
              back to the website
            </span>
          </Button>
        </NavLink>
      </div>

      {/* Main layout */}
      <Route path='/triads/random'>
        <RandomMode setShowMenu={setShowMenu} showMenu={showMenu} />
      </Route>

      <Route path='/triads/career'>
        This content is in progress…
      </Route>

      {showMenu && <TriadsMenu showMenu={showMenu} setShowMenu={setShowMenu} />}

      {/* Define lines pattern */}
      <svg width='41' height='40' viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">              
        <defs>
          { Object.keys(triadColors).map((colorName, i) => (
            <pattern key={i} id={`pattern-${colorName}`} x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
              <path d="M0,5H10" strokeWidth="6" stroke={triadColors[colorName]} />
            </pattern>
          )) }
        </defs>
      </svg>

    </div>
  )
}

export default TriadsPage;
