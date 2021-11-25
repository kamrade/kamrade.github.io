import React from 'react';
import { TriadNode } from '../TriadNode/TriadNode';
import s from './TriadsBoard.module.scss';

const TriadsBoard = () => (
  <div className={s.TriadsBoard}>
    <TriadNode shape='triangle' size='lg' color='primary' fill='solid' />
    <TriadNode shape='triangle' size='lg' color='primary' fill='outline'/>
    <TriadNode shape='triangle' size='lg' color='primary' fill='pattern'/>

    <TriadNode shape='triangle' size='md' color='primary' fill='solid' />
    <TriadNode shape='triangle' size='md' color='primary' fill='outline'/>
    <TriadNode shape='triangle' size='md' color='primary' fill='pattern'/>

    <TriadNode shape='triangle' size='sm' color='primary' fill='solid' />
    <TriadNode shape='triangle' size='sm' color='primary' fill='outline'/>
    <TriadNode shape='triangle' size='sm' color='primary' fill='pattern'/>



    <TriadNode shape='triangle' size='lg' color='secondary' fill='solid' />
    <TriadNode shape='triangle' size='lg' color='secondary' fill='outline'/>
    <TriadNode shape='triangle' size='lg' color='secondary' fill='pattern'/>
    
    <TriadNode shape='triangle' size='md' color='secondary' fill='solid' />
    <TriadNode shape='triangle' size='md' color='secondary' fill='outline'/>
    <TriadNode shape='triangle' size='md' color='secondary' fill='pattern'/>

    <TriadNode shape='triangle' size='sm' color='secondary' fill='solid' />
    <TriadNode shape='triangle' size='sm' color='secondary' fill='outline'/>
    <TriadNode shape='triangle' size='sm' color='secondary' fill='pattern'/>



    <TriadNode shape='triangle' size='lg' color='tertiary' fill='solid' />
    <TriadNode shape='triangle' size='lg' color='tertiary' fill='outline'/>
    <TriadNode shape='triangle' size='lg' color='tertiary' fill='pattern'/>
    
    <TriadNode shape='triangle' size='md' color='tertiary' fill='solid' />
    <TriadNode shape='triangle' size='md' color='tertiary' fill='outline'/>
    <TriadNode shape='triangle' size='md' color='tertiary' fill='pattern'/>

    <TriadNode shape='triangle' size='sm' color='tertiary' fill='solid' />
    <TriadNode shape='triangle' size='sm' color='tertiary' fill='outline'/>
    <TriadNode shape='triangle' size='sm' color='tertiary' fill='pattern'/>
  </div>
);

export default TriadsBoard;
