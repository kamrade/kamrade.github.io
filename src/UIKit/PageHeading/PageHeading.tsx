import React, { ReactNode } from 'react';
import  './PageHeading.scss';

type Props = {
  children: ReactNode
}

export const PageHeading = (props: Props) => {

  return (
    <div className='PageHeading'>
      {props.children}
    </div>
  )
}
