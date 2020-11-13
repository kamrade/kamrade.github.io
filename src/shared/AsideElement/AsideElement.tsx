// Element wrapper inside Aside component which determine spacing

import React, { ForwardedRef } from 'react';
import s from './AsideElement.module.scss';

export const AsideElement = React.forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={s.AsideElement} onClick={props.hide}>
      { props.children }
    </div>
  );
});