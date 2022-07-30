import React from 'react';
import  './TermLoader.scss';

export interface ITermLoaderProps {

}

export const TermLoader: React.FC<ITermLoaderProps> = () => {

  return (
    <span className={'TermLoader'} />
  );

}

export const TermLoaderBlocks: React.FC = () => {
  return (
    <span className={'TermLoaderBlocks'}>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
    </span>
  );
}

