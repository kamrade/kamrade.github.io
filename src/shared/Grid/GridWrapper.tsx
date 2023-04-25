import React, {useEffect, useState} from 'react';
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

export const GridWrapper: React.FC = () => {

  const prepareHeadingData = (data: TableHeading[]) => data
    .filter((el: TableHeading) => el.isShowed)
    .sort((el1: TableHeading, el2: TableHeading) => el1.position - el2.position);

  // TODO: implementation
  // Here is the place where data should be
  // - sorted
  // - filtered
  // - paginated
  // - calculate statistic
  const prepareData = (data: RuleVeto[], sortedBy: ISortedBy) => data;

  const [cols, setCols] = useState( prepareHeadingData(allTableHeadingsMap) );
  const [data, setData] = useState( prepareData(ruleVetoData, {
    column: cols[0].id,
    direction: 'acc',
  }) );

  const [sortedBy, setSortedBy] = useState<ISortedBy>({
    column: cols[0].id,
    direction: 'acc',
  });

  useEffect(() => {
    setData( prepareData(ruleVetoData, sortedBy) );
  }, [sortedBy, sortedBy.direction, sortedBy.column]);

  function calculateFullWidth(data: TableHeading[]) {
    let fullWidth = 0;
    for(let i = 0; i < data.length; i++) {
      if (data[i].isShowed) {
        fullWidth += data[i].width;
      }
    }
    return fullWidth;
  }

  // TODO: Refactoring needed
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

  return (
    <div>
      <div className={s.GridWrapper}>
        {/*
          Here will be displayed:
            - table name,
            - sorting method
            - searching,
            - filtering,
            - pagination,
            - adding new items,
            - data statistics
         */}
      </div>

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
                { cols.map((el: TableHeading, i: number) =>
                  <GridTD el={el} key={i}>{ element[el.id] }</GridTD>)
                }
              </GridTableRow>
            )
          )}
        </GridTableBody>

      </Grid>
    </div>
  );
}
