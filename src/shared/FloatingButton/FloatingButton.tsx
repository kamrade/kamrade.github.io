import React from 'react';
import {Link} from "react-router-dom";

import s from './FloatingButton.module.scss';

interface IFloatingButtonProps {}

export const FloatingButton: React.FC<IFloatingButtonProps> = ({ children }) => {
  return (
    <Link to='/' >
      <button className={s.FloatingButton}>
        {children}
      </button>
    </Link>
  );
}
