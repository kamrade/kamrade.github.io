import React from 'react';
import {Link} from "react-router-dom";
import {Button, Icon} from "shared";
import {colors} from 'config/colors';

export const BackToMain = () => {
  return (
    <Link to='/main' >
      <div style={{textAlign: 'center', marginBottom: '1rem'}}>
        <Button>
          <span className='text-muted'>
            <Icon stroke={1.5} size={20} icon='chevronLeft' color={colors.gray600} />
            back
          </span>
        </Button>
      </div>
    </Link>
  );
}
