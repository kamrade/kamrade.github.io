import React from 'react';

import s from './PageTitle.module.scss';

export const PageTitle = ({children}: any) => (<>
  <h1 className={s.PageTitle}>
    {children}
  </h1>
</>);