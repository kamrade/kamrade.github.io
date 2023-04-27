import React, { useRef, useEffect, useState } from 'react'
import s from './TD.module.scss';
import { TableHeading } from './grid.types';
import { Button } from 'shared';
import classNames from "classnames/bind";
import { GridTDTheme } from './grid.types';
import { RiArrowRightUpFill, RiMoreFill } from "react-icons/ri";

const sx = classNames.bind(s);

export interface GridTDProps {
  el: TableHeading;
  theme?: GridTDTheme;
  link?: string;
  children: any;
  interactionText?: string;
  border?: boolean;
}

export const TD: React.FC<GridTDProps> = ({ children, el, theme = 'base', link, interactionText, border }) => {

  const refContent  = useRef<HTMLDivElement>(null);
  const refChildren = useRef<HTMLDivElement>(null);
  const [showEllipsis, setShowEllipsis] = useState(false);

  useEffect(() => {
    const contentWidth  = refContent.current?.getBoundingClientRect().width;
    const childrenWidth = refChildren.current?.getBoundingClientRect().width;
    if (childrenWidth && contentWidth) {
      setShowEllipsis(childrenWidth > contentWidth);
    }
  });

  function openDetails() {
    // @ts-ignore
    alert(Object.keys(el).map(((key: string) => `${key}: ${el[key]}`)));
  }

  return (
    <div className={sx({
      GridTD: true,
      GridThemeBase: theme === 'base' || !theme,
      GridThemePrimary: theme === 'primary',
      GridThemeSuccess: theme === 'success',
      GridThemeDanger: theme === 'danger',
      GridThemeMuted: theme === 'muted',
      GridLink: link,
      GridTDBorder: border,
    })} style={{ width: `${el.width}px` }}>

      <div className={sx({
        GridTDContent: true,
      })} ref={refContent} style={{ marginRight: showEllipsis ? '4px' : '0'}}>

        <span className={s.GridTDChildren} ref={refChildren}>
          {children}
        </span>

      </div>

      <span className={s.Link}>
          {link && <RiArrowRightUpFill/>}
        </span>

      { showEllipsis &&
        <span className={s.More} title={children}>
          <RiMoreFill/>
        </span>
      }

      {interactionText &&
        <div className={s.openDetails} >
          <Button bold size={'xs'} theme={'base'} variant={'outlined'} onClick={openDetails}>{interactionText || 'Open'}</Button>
        </div>
      }

    </div>
  );

}
