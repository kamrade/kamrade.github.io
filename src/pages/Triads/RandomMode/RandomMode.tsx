import React, { useState, useEffect } from 'react';

import { TriadsBoard } from '../TriadsBoard';
import { ITriadsFound } from '../triadHelpers/triad-detector';
import { initiateTriads, triadDetector } from 'pages/Triads/triadHelpers';
import { PopupNotification } from 'shared';

import s from './RandomMode.module.scss';

interface IRandomModeProps {
}

const RandomMode: React.FC<IRandomModeProps> = () => {

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

        if (
          (keys.includes( selection[0].toString() )) &&
          (keys.includes( selection[1].toString() )) &&
          (keys.includes( selection[2].toString() ))
        ) {
          setSelection([]);
          setTriads( initiateTriads());
          setResult(true);
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

      <div className={s.TriadsPageContent}>
        <TriadsBoard selection={selection} setSelection={setSelection} triads={triads} />
      </div>

      <div className={s.TriadsControls} >
        <button onClick={reset} className={s.TriadsButton}>Refresh</button>
        <button onClick={() => setSelection([])} className={s.TriadsButton}>Clear</button>
      </div>

      <div className={s.TriadsWidget}>
        Triads possible: {triadsFound.length}
        {triadsFound.map((triad, i) => {
          return (
            <div key={i} className={s.posibilities}>
              {Object.keys(triad).map((number, j) => (
                <span style={{marginRight: '4px'}} key={j}>{number}</span>
              ))}
            </div>
          )
        })}
      </div>


      <PopupNotification
        popupState={{ isShowed: result }}
        setPopupState={setResult}
        textContent={'OK'} />

    </div>
  );
}

export { RandomMode }
