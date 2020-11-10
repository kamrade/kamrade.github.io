// Just usermenu

import React from 'react';
import s from './UserBlock.module.scss';
import { Box } from 'shared/Box/Box';
import { Icon } from 'shared/Icon/Icon';

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
            
            <b className="text-overflow">{ companyName }</b>
            <br/>
            <span className="text-overflow">{ username } Some very long text with many words</span>
          
          </div>

          <div className={s.Icon}>
            <Icon color="#B343CF" icon="chevronDown" size={24} stroke={2} />
          </div>

        </div>
      </Box>
    </div>
  );
}