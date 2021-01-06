/*
  ## TODO: Card roadmap
  - [ ] Interactive
  - [ ] Link
  - [x] Closable
*/

import React, { ReactChild } from 'react';
import {Close} from "shared/Close/Close";
import {isNil} from 'lodash';
import classNames from "classnames/bind";
import s from './Card.module.scss';

const sx = classNames.bind(s);

/*
  We had to change type from ReactNode to ReactChild
  because ReactNode contains within its definition a mixed type 👉 {}
  which would narrow our children type to {}
  instead of being NamedChildrenSlots which remove our strict type checking
  of our children as object.
*/

type CardThemes = 'default' | 'error';

type CardProps = {
  children: ReactChild | NamedChildrenSlots;
  theme?: CardThemes;
  onClose?: (e:React.MouseEvent<HTMLDivElement>) => void;
}

type NamedChildrenSlots = {
  header?: ReactChild,
  content: ReactChild,
  actions?: ReactChild
}

export const Card = (props: CardProps) => {

  const { children, theme, onClose } = props;

  let cardClassNames = sx({
    Card: true,
    Error: isNil(theme) ? false : theme
  });

  // runtime check so app will throw when consumer forgot to provide children
  if (!children) {
    throw new Error('children is mandatory!');
  }

  return (
    <div className={cardClassNames}>
      <div className="Content">
        {isNamedSlots(children) && (<>
          { children.header ? <div className={s.CardHeader}>{children.header}</div> : null }
          <div className={s.CardContent}>{children.content}</div>
          { children.actions ? <div className={s.CardActions}>{children.actions}</div> : null }
        </>)}


        {!isNamedSlots(children) && (<span className={s.ChildrenWrapper}>{children}</span>)}
      </div>

      {onClose && <Close onClose={onClose} />}

    </div>
  )

}

const isObject = <T extends object>(value: any): value is T => {
  return typeof value === 'object' && typeof value !== 'function' && value !== undefined;
};

const isNamedSlots = (children: any): children is NamedChildrenSlots => {
  return isObject(children) && 'content' in children;
};
