import React, { useState, useEffect } from 'react';

import { Icon } from 'shared';
import { TriadsBoard } from '../TriadsBoard';
import { triadPrimary } from 'components/Triads/constants/css';
import { ITriadsFound } from '../triadHelpers/triad-detector';
import { initiateTriads, triadDetector } from 'components/Triads/triadHelpers';
import s from './RandomMode.module.scss';

interface IRandomModeProps {
  setShowMenu: (showMenu: boolean) => void;
  showMenu: boolean;
}

const RandomMode: React.FC<IRandomModeProps> = ({ showMenu, setShowMenu }) => {

  const [triads, setTriads] = useState<number[][]>( initiateTriads() );
  const [selection, setSelection] = useState<number[]>([]);
  const [triadsFound, setTriadsFound] = useState<ITriadsFound[]>([]);
  
  useEffect(() => {
    let founded = triadDetector(triads);
    setTriadsFound(founded);
  }, [triads]);

  useEffect(() => {
    if (selection.length >= 3) {
      triadsFound.map((tr, i) => {
        let keys = Object.keys(tr);
        if (keys[0] === selection[0].toString() && keys[1] === selection[1].toString() && keys[2] === selection[2].toString()) {
          console.log('OK');
        }
        return null;
      });
    }
  }, [selection, triadsFound]);

  const reset = () => {
    setTriads( initiateTriads());
    setSelection([]);
  }

  return (
    <div className={s.RandomMode}>
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
                <button onClick={reset} className={s.TriadsButton}>Refresh</button>
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
    </div>
  );
}

export { RandomMode }