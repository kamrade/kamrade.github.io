// Modes:
// 1. Find all possible triads
// 2. Find one and refresh
// 3. Increase contrast between elements size

import React from 'react';
import { Route } from 'react-router-dom';

import { triadColors } from './TriadNode/TriadNode.types';
import { RandomMode } from './RandomMode';

import s from './TriadsPage.module.scss';

const TriadsPage: React.FC = () => {

  return (
    <div className={s.TriadsPage}>

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
