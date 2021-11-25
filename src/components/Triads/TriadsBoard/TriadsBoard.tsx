import React, { useState, useEffect } from 'react';
import { TriadNode, TriadNodeShape, TriadNodeSize, TriadNodeColor, TriadNodeFill } from '../TriadNode/TriadNode';
import s from './TriadsBoard.module.scss';

const shapes: TriadNodeShape[] = ['triangle', 'square', 'circle'];
const sizes: TriadNodeSize[]   = ['lg', 'md', 'sm'];
const colors: TriadNodeColor[] = ['primary', 'secondary', 'tertiary'];
const fills: TriadNodeFill[]   = ['solid', 'outline', 'pattern'];

const randomIntFromInterval = (min: number, max: number): number => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const initiateTriads = () => {
  let triads = [];
  let current = [];
  for (let i = 0; i < 12; i++) {
    current = [];
    for (let j = 0; j < 4; j++) {
      current.push(randomIntFromInterval(0, 2));
    }
    triads.push(current);
  }
  return triads;
}

const TriadsBoard = () => {

  const [selection, setSelection] = useState<number[]>();
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

  useEffect(() => {
    console.log(selection);
  }, [selection]);

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
