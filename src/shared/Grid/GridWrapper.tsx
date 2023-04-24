import React from 'react';
import { Grid } from './Grid';
import { GridTableHead } from './GridTableHead';
import { GridTableBody } from './GridTableBody';
import { GridTH } from './GridTH';
import { GridTD } from './GridTD';
import { RuleVeto } from './rule-veto.types';
import { ruleVetoData, allTableHeadingsMap } from "./rule-veto.data";
import { TableHeading } from './grid.types';
import { GridTableRow } from './GridTableRow';

export const GridWrapper: React.FC<{}> = () => {

  let sortedAndFilteredTabs = allTableHeadingsMap
    .filter((el: TableHeading) => el.isShowed)
    .sort((el1: TableHeading, el2: TableHeading) => el1.position - el2.position);


  function calculateFullWidth(data: TableHeading[]) {
    let fullWidth = 0;
    for(let i = 0; i < data.length; i++) {
      if (data[i].isShowed) {
        fullWidth += data[i].width;
      }
    }
    return fullWidth;
  }

  function resizeColumn(el: TableHeading, offset: number) {
    console.log('::: resize column', el.id, offset);
    
  }

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

        <GridTableHead fullWidth={calculateFullWidth(sortedAndFilteredTabs)}>
          {sortedAndFilteredTabs.map((el: TableHeading, i: number) =>
            <GridTH resizeHandler={resizeColumn} el={el} key={i}>{el.title}</GridTH>)
          }
        </GridTableHead>

        <GridTableBody>

            {ruleVetoData.map((element: RuleVeto, j: number) =>
              (
                <GridTableRow key={j} fullWidth={calculateFullWidth(sortedAndFilteredTabs)}>
                  { sortedAndFilteredTabs.map((el: TableHeading, i: number) =>
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