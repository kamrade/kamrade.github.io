import React, { useState, useEffect } from 'react';
import { TriadNode } from '../TriadNode/TriadNode';
import { shapes, sizes, colors, fills } from '../TriadNode/TriadNode.types';
import { initiateTriads, triadDetector } from 'components/Triads/triadHelpers';
import s from './TriadsBoard.module.scss';
import { Button } from 'shared';

const TriadsBoard = () => {

  const [selection, setSelection] = useState<number[]>([]);
  const [triads] = useState<number[][]>(initiateTriads());

  useEffect(() => {
    triadDetector(triads);
  }, [triads]);


  const triadClickHandler = (keyId: number) => {
    if (selection?.includes(keyId)) {
      let newSelection = selection.filter((f) => f !== keyId);
      setSelection(newSelection);
    } else {
      if (selection?.length) {
        setSelection([ ...selection, keyId ]);
      } else {
        setSelection([ keyId ]);
      }
    }
  }

  return (
    <div>
      
      <div className={s.TriadsBoard}>
        {triads.map((triad, i) => (
          <TriadNode
            key={i}
            keyId={i}
            selected={selection?.includes(i) || false}
            onClick={triadClickHandler}
            size={sizes[triad[0]]}
            shape={shapes[triad[1]]}
            color={colors[triad[2]]}
            fill={fills[triad[3]]}
          /> 
        ))}

        <div className={s.actions}>
          <Button theme='primary' block={true}>Refresh</Button>
        </div>

      </div>



    </div>
  )
};

export default TriadsBoard;
