import React from 'react';
import s from './Skeleton.module.scss';

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({width, height}) => {
  return (
    <div className={s.Skeleton} style={{
      width: width ? width : 'auto',
      height: height ? height : 'auto',
    }} />
  );
}
