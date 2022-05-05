import React from 'react';
import  './TermLoader.scss';

export interface ITermLoaderProps {

}

export const TermLoader: React.FC<ITermLoaderProps> = () => {

  return (
    <div className={'TermLoader'} />
  );

}

export const TermLoaderBlocks: React.FC = () => {
  return (
    <div className={'TermLoaderBlocks'}>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
      <span className={'TermLoaderBlock'}></span>
    </div>
  );
}

