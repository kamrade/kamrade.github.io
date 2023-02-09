// Modes:
// 1. Find all possible triads
// 2. Find one and refresh
// 3. Increase contrast between elements size

import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Button } from 'shared';

import { triadColors } from './TriadNode/TriadNode.types';
import { RandomMode } from './RandomMode';

import s from './TriadsPage.module.scss';
import {RiArrowLeftLine} from "react-icons/ri";

const TriadsPage: React.FC = () => {

  return (
    <div className={s.TriadsPage}>

      {/* Link back */}
      <NavLink exact to='/main'>
        <div className={s.BackLink}>
          <Button
            className='Button-back'
            prefix={<RiArrowLeftLine />}
            variant={'contained'}
            theme={'base'}
            size={'sm'}>back to the website</Button>
        </div>
      </NavLink>

      {/* Main layout */}
      <Route path='/triads/random'>
        <RandomMode />
      </Route>

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
