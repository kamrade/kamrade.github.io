// Just usermenu

import React from 'react';
import s from './UserBlock.module.scss';
import { Box } from 'shared/Box/Box';

export interface IUserBlockProps {
  username: string;
  companyName: string;
}

export const UserBlock = ({ username, companyName }: IUserBlockProps ) => {
  return (
    <div className={s.UserBlock}>
      <Box>
        <div className={s.UserBlockContent}>
          
          <div className={s.Avatar}>{companyName[0]}</div>
          
          <div className={s.User}>
            <b>{ companyName }</b>
            <br/>
            { username }
          </div>

        </div>
      </Box>
    </div>
  );
}