import React from 'react';
import s from './UserBlock.module.scss';
import { Box, Icon } from 'shared';
import { AuthButton } from './AuthButton';
import { useAuth } from "../../components/ProvideAuth/ProvideAuth";

export interface IUserBlockProps {
  username: string;
  companyName: string;
}

export const UserBlock = ({ username, companyName }: IUserBlockProps ) => {

  let auth = useAuth();

  return (
    <div className={s.UserBlock}>
      <Box>
        <div className={s.UserBlockContent}>

          {auth?.user
            ? <div className={s.Avatar}>{auth.user[0]}</div>
            : <div className={s.GuestAvatar} />
          }
          
          <div className={s.User}>

            {auth?.user
              ? <b className="text-overflow">{ auth.user }</b>
              : <b className="text-overflow">Guest Mode</b>
            }

            <br/>

            {auth?.user
              ? <span className="text-overflow">{ username } Some very long text with many words</span>
              : <span className="text-overflow">Sign In</span>
            }

          </div>

          <div className={s.Icon}>
            <Icon color="#B343CF" icon="chevronDown" size={24} stroke={2} />
          </div>
        </div>

      </Box>
    </div>
  );
}
