import React, { useState } from 'react';
import { TriadNode } from '../TriadNode/TriadNode';
import { shapes, sizes, colors, fills } from '../TriadNode/TriadNode.types';
import { initiateTriads } from './initiateTriads';
import s from './TriadsBoard.module.scss';

const TriadsBoard = () => {

  const [selection, setSelection] = useState<number[]>([]);
  const [triads] = useState<number[][]>(initiateTriads());


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
    <div className={s.TriadsBoard}>

      {triads.map((triad, i) => (
        <TriadNode
          key={i}
          keyId={i}
          selected={selection?.includes(i) || false}
          onClick={triadClickHandler}
          shape={shapes[triad[0]]} 
          size={sizes[triad[1]]} 
          color={colors[triad[2]]} 
          fill={fills[triad[3]]}
        /> ))}
    </div>
  )
};

export default TriadsBoard;
