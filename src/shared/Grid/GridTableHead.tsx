import React from 'react';
import s from './GridTableHead.module.scss'
import { Button } from "../Button";
import { RiAddCircleFill, RiTableFill, RiRestartLine } from "react-icons/ri";

interface GridTableHeadProps {
  children: any;
  fullWidth: number;
}

export const GridTableHead: React.FC<GridTableHeadProps> = ({children, fullWidth}) => {

  const setupColumns = () => {
    alert('setup columns');
  }

  const resetColumns = () => {
    alert('reset columns');
  }

  return (
    <div className={s.GridTableHead}>
      <div className={s.GridTableHeadContent} style={{ width: `${fullWidth}px`}}>

        {children}

        <div className={s.setupColumns} >
          <Button iconButton prefix={<RiRestartLine />} size={'xs'} theme={'base'} variant={'light'} onClick={resetColumns} />
          <Button iconButton prefix={<RiTableFill />} size={'xs'} theme={'primary'} variant={'light'} onClick={setupColumns} />
        </div>

      </div>
    </div>
  );
}
