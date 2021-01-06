import React from 'react';
import s from './Close.module.scss';
import {Icon} from "shared/Icon/Icon";

export interface ICloseProps {
  onClose: (e: React.MouseEvent<any>) => void;
}

export const Close = ({ onClose }: ICloseProps) => {

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    onClose && onClose(e);
  }

  return (
    <div className={s.Close} onClick={handleClick}>
      <Icon icon="x" size={20} stroke={1.5} />
    </div>
  );
}
