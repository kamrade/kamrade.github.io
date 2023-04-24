import React from 'react';
import { Grid } from './Grid';
import { GridTableHead } from './GridTableHead';
import { GridTH } from './GridTH';
import { ruleVetoData, allTableHeadingsMap } from "./rule-veto.data";
import { TableHeading } from './grid.types';

export const GridWrapper: React.FC<{}> = () => {

  let sortedAndFilteredTabs = allTableHeadingsMap
    .filter((el: TableHeading) => el.isShowed)
    .sort((el1: TableHeading, el2: TableHeading) => el1.position - el2.position);

  return (
    <div>
      <div className={'uimp-grid-control'}>
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

      <Grid data={ruleVetoData}>

        <GridTableHead>
          {sortedAndFilteredTabs.map((el: TableHeading, i: number) =>
            <GridTH key={i}>{el.title}</GridTH>)
          }
        </GridTableHead>

      </Grid>
    </div>
  );
}
