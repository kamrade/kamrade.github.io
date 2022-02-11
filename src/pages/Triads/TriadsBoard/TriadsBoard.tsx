import React from 'react';
import { TriadNode } from '../TriadNode/TriadNode';
import { shapes, sizes, colors, fills } from '../TriadNode/TriadNode.types';

import s from './TriadsBoard.module.scss';

interface ITriadBoardProps {
  triads: number[][];
  selection: number[];
  setSelection: (selection: number[]) => void;
}

const TriadsBoard: React.FC<ITriadBoardProps> = ({ triads, selection, setSelection }) => {

  // selection handler
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

      </div>
    </div>
  )
};

export { TriadsBoard };
