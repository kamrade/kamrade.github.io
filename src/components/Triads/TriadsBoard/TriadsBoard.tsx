import React from 'react';
import { TriadNode } from '../TriadNode/TriadNode';
import s from './TriadsBoard.module.scss';

const TriadsBoard = () => (
  <div className={s.TriadsBoard}>
    <TriadNode shape='triangle' size='lg' color='primary' />
    <TriadNode shape='triangle' size='md' color='secondary'/>
    <TriadNode shape='triangle' size='sm' color='tertiary'/>

    <TriadNode shape='triangle' size='lg' />
    <TriadNode shape='square' size='md' />
    <TriadNode shape='circle' size='sm' />

    <TriadNode shape='triangle' size='lg' color='primary' />
    <TriadNode shape='square' size='md' color='secondary'/>
    <TriadNode shape='circle' size='sm' color='tertiary'/>
  </div>
);

export default TriadsBoard;
