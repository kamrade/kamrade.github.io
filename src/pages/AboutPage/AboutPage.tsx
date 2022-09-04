import React from 'react';

import {PageTitle} from 'shared/PageTitle/PageTitle';
import {ScrambledText} from "../../shared/ScrambledText";

export const AboutPage = () => {
  return (
    <div className='container'>
      <div className={'p-3 text-center'}>
        <ScrambledText
          slideLength={5000}
          value={[
            '[ Product design ]',
            '[ Prototyping ]',
            '[ Infographic ]',
            '[ Design systems ]',
            '[ React components ]',
          ]}
        />
      </div>
    </div>
  );
}
