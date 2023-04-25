import React from 'react'
import s from './GridTD.module.scss';
import { TableHeading } from './grid.types';
import { Button } from 'shared';
import classNames from "classnames/bind";
const sx = classNames.bind(s);

export type GridTDTheme = 'base' | 'primary' | 'muted' | 'danger' | 'success';

export interface GridTDProps {
  el: TableHeading;
  theme?: GridTDTheme;
  children: any;
}

export const GridTD: React.FC<GridTDProps> = ({ children, el, theme = 'base' }) => {

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
    })} style={{ width: `${el.width}px` }}>
      {children}
      <div className={s.openDetails} >
        <Button size={'xs'} theme={'primary'} variant={'light'} onClick={openDetails}>Open</Button>
      </div>
    </div>
  );

}
