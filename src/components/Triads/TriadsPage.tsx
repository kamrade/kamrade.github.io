import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Button, Icon } from 'shared';

import { triadColors } from './TriadNode/TriadNode.types';
import TriadsBoard from './TriadsBoard/TriadsBoard';
import { TriadsMenu } from './TriadsMenu/TriadsMenu';

import { initiateTriads } from 'components/Triads/triadHelpers';
import { triadDetector } from 'components/Triads/triadHelpers';
import { ITriadsFound } from './triadHelpers/triad-detector';

import { triadPrimary } from 'components/Triads/constants/css';

import s from './TriadsPage.module.scss';

const TriadsPage: React.FC = () => {

  const [triads, setTriads] = useState<number[][]>(initiateTriads());
  const [selection, setSelection] = useState<number[]>([]);
  const [triadsFound, setTriadsFound] = useState<ITriadsFound[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  useEffect(() => {
    let founded = triadDetector(triads);
    setTriadsFound(founded);
  }, [triads]);

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
        <div className="container-fluid">
          <div className="row">
            
            <div className="col-8">
            </div>
            
            <div className="col-8">
              <div className={s.TriadsPageContent}>
                <div className={s.TriadPageHead} onClick={() => setShowMenu(true)}>
                  
                  <span style={{position: 'relative', top: '6px', marginRight: '12px'}}>
                    <Icon color={triadPrimary} stroke={1.5} size={24} icon='hamburger' />
                  </span>
                  Triads

                </div>
                <TriadsBoard selection={selection} setSelection={setSelection} triads={triads} />
                <div className={s.TriadsActions}>
                  <button onClick={() => setTriads(initiateTriads())} className={s.TriadsButton}>Refresh</button>
                  <button onClick={() => setSelection([])} className={s.TriadsButton}>Clear selection</button>
                </div>

              </div>
            </div>

            <div className="col-8">
              <div className={s.TriadsWidget} style={{ marginTop: '4rem' }}>
                Triads found: {triadsFound.length}

                  {triadsFound.map((triad, i) => {
                    return (
                      <div key={i}>
                        {Object.keys(triad).map((number, j) => (
                          <span style={{marginRight: '4px'}} key={j}>{number}</span>
                        ))}
                      </div>
                    )
                  })}
              </div>
            </div>

          </div>
        </div>
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
