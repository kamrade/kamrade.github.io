import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'shared';

import { triadColors } from './TriadNode/TriadNode.types';
import TriadsBoard from './TriadsBoard/TriadsBoard';

import s from './TriadsPage.module.scss';

const TriadsPage: React.FC = () => {
  return (
    <div className={s.TriadsPage}>

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

      <div className={s.TriadsPageContent}>
        <TriadsBoard></TriadsBoard>
      </div>


    </div>
  )
}

export default TriadsPage;
