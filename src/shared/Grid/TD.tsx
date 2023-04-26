import React from 'react'
import s from './TD.module.scss';
import { TableHeading } from './grid.types';
import { Button } from 'shared';
import classNames from "classnames/bind";
import { GridTDTheme } from './grid.types';
import { RiArrowRightUpFill } from "react-icons/ri";


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
      <div className={s.GridTDChildren} title={children}>
        {children}
        <span className={s.Link}>
          {link && <RiArrowRightUpFill/>}
        </span>
      </div>

      <div className={s.openDetails} >
        <Button size={'xs'} theme={'primary'} variant={'light'} onClick={openDetails}>{interactionText || 'Open'}</Button>
      </div>

    </div>
  );

}
