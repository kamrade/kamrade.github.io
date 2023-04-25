import React, { useEffect, useState } from 'react';
import {Grid} from './Grid';
import {GridTableHead} from './GridTableHead';
import {GridTableBody} from './GridTableBody';
import {GridTH} from './GridTH';
import {GridTD} from './GridTD';
import {RuleVeto} from './rule-veto.types';
import {allTableHeadingsMap, ruleVetoData} from "./rule-veto.data";
import {ISortedBy, TableHeading} from './grid.types';
import {GridTableRow} from './GridTableRow';
import s from './GridWrapper.module.scss';
import { calculateFullWidth } from './helpers/claculateFulWidth';
import { prepareData } from './helpers/prepareData';

export const GridWrapper: React.FC = () => {

  const prepareHeadingData = (data: TableHeading[]) => data
    .filter((el: TableHeading) => el.isShowed)
    .sort((el1: TableHeading, el2: TableHeading) => el1.position - el2.position);

  const [cols, setCols] = useState( prepareHeadingData(allTableHeadingsMap) );

  const defaultSorting: ISortedBy = {
    column: cols[0].id,
    direction: 'acc',
  }

  const [data, setData] = useState( prepareData(ruleVetoData, defaultSorting) );

  const [sortedBy, setSortedBy] = useState<ISortedBy>(defaultSorting);

  useEffect(() => {
    setData( prepareData(ruleVetoData, sortedBy) );
  }, [sortedBy, sortedBy.direction, sortedBy.column]);

  function resizeColumn(el: TableHeading, offset: number) {
    let newArr = cols.filter((element: TableHeading, i: number) => {
      if (el.id !== element.id) {
        return element;
      } else {
        element.width += offset;
        return element;
      }
    });

    setCols(newArr);
  }

  // @ts-ignore
  return (
    <div className={s.GridWrapper} >
      <div className={s.GridHeader}></div>

      <Grid>
        <GridTableHead fullWidth={calculateFullWidth(cols)}>
          {cols.map((el: TableHeading, i: number) =>
            <GridTH sortedBy={sortedBy} setSortedBy={setSortedBy} resizeHandler={resizeColumn} el={el} key={i}>{el.title}</GridTH>)
          }
        </GridTableHead>

        <GridTableBody>
          { data.map((element: RuleVeto, j: number) =>
            (
              <GridTableRow key={j} fullWidth={calculateFullWidth(cols)}>
                { cols.map((el: TableHeading, i: number) => {
                  // @ts-ignore
                  return <GridTD theme={el.theme} el={el} key={i}>{ element[el.id] }</GridTD>
                })}
              </GridTableRow>
            )
          )}
        </GridTableBody>
      </Grid>
    </div>
  );
}
