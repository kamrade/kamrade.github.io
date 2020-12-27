/*
  ## Card roadmap
  - [ ] Interactive
  - [ ] Link
*/

import React, { ReactChild } from 'react';
import CardStyles from './Card.module.scss';

/*
  We had to change type from ReactNode to ReactChild
  because ReactNode contains within its definition a mixed type 👉 {}
  which would narrow our children type to {}
  instead of being NamedChildrenSlots which remove our strict type checking
  of our children as object.
*/


type CardProps = {
  children: ReactChild | NamedChildrenSlots
}

type NamedChildrenSlots = {
  header?: ReactChild,
  content: ReactChild,
  actions?: ReactChild
}

export const Card = (props: CardProps) => {

  const { children } = props;

  // runtime check so app will throw when consumer forgot to provide children
  if (!children) {
    throw new Error('children is mandatory!');
  }

  if (isNamedSlots(children)) {
    const { header, content, actions } = children;
    return (
      <div className={CardStyles.Card}>
        { header ? <div className={CardStyles.CardHeader}>{header}</div> : null }
        <div className={CardStyles.CardContent}>{content}</div>
        { actions ? <div className={CardStyles.CardActions}>{actions}</div> : null }

      </div>
    )
  }

  return <div className={CardStyles.Card}>{children}</div>


}

const isObject = <T extends object>(value: any): value is T => {
  return typeof value === 'object' && typeof value !== 'function' && value !== undefined;
};

const isNamedSlots = (children: any): children is NamedChildrenSlots => {
  return isObject(children) && 'content' in children;
};
