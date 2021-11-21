import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'shared';
import s from './TriadsPage.module.scss';

const TriadsPage: React.FC = () => {
  return (
    <div className={s.TriadsPage}>

      <div className={s.BackLink}>
        <NavLink exact to='/main'>
          <Button>
            <span style={{color: 'white'}}>
              <Icon color={'white'} stroke={1.5} size={20} icon='chevronLeft'></Icon>
              back to the website
            </span>
          </Button>
        </NavLink>
      </div>

      <div className={s.TriadsPageContent}>
        Triads Page
      </div>


    </div>
  )
}

export default TriadsPage;
