import React from 'react';
import s from './Skeleton.module.scss';

interface SkeletonProps {
  width?: string;
  height?: string;
  marginBottom?: string;
  block?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({width, height, marginBottom, block}) => {
  return (
    <div className={s.Skeleton} style={{
      width: width ? width : 'auto',
      height: height ? height : 'auto',
      marginBottom: marginBottom  ?  marginBottom : '0px',
      display: block ? 'block' : 'inline-block'
    }} />
  );
}
