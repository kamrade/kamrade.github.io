import React, { useState, useEffect } from 'react';

import { TriadsBoard } from '../TriadsBoard';
import { ITriadsFound } from '../triadHelpers/triad-detector';
import { initiateTriads, triadDetector } from 'components/Triads/triadHelpers';
import s from './RandomMode.module.scss';
import { PopupNotification } from 'shared';

interface IRandomModeProps {
  setShowMenu: (showMenu: boolean) => void;
  showMenu: boolean;
}

const RandomMode: React.FC<IRandomModeProps> = ({ showMenu, setShowMenu }) => {

  const [triads, setTriads] = useState<number[][]>( initiateTriads() );
  const [selection, setSelection] = useState<number[]>([]);
  const [triadsFound, setTriadsFound] = useState<ITriadsFound[]>([]);
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    // New set generated
    let founded = triadDetector(triads);
    setTriadsFound(founded);
    setResult(false);
  }, [triads]);

  useEffect(() => {
    if (selection.length >= 3) {
      triadsFound.map((tr, _i) => {
        let keys = Object.keys(tr);
        if (keys[0] === selection[0].toString() && keys[1] === selection[1].toString() && keys[2] === selection[2].toString()) {
          setResult(true);
          setSelection([]);
        }
        return null;
      });
    } else if (selection.length > 0) {
      setResult(false);
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
                Triads. Random mode.
              </div>

              <TriadsBoard selection={selection} setSelection={setSelection} triads={triads} />


            </div>
          </div>

          <div className="col-8">

            <div className={s.TriadsWidget} style={{ marginTop: '4rem' }}>
              <button onClick={reset} className={s.TriadsButton}>Refresh</button>
              <button style={{marginBottom: '0'}} onClick={() => setSelection([])} className={s.TriadsButton}>Clear selection</button>
            </div>

            <div className={s.TriadsWidget}>
              Triads possible: {triadsFound.length}
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

      <PopupNotification
        popupState={{ isShowed: result }}
        setPopupState={setResult}
        textContent={'test'} />
    </div>
  );
}

export { RandomMode }
