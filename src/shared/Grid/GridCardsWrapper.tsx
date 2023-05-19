import React, {useEffect, useState, useRef} from 'react';
import { Grid, TableBody, TD, TableRow, ISortedBy, TableHeading, gridOptions, ColumnsSetupDialog } from '.';
import { calculateFullWidth, prepareData, prepareHeadingData, resizeColumnHelper, toggleColumnHelper } from './helpers';
import { RuleVeto, allTableHeadingsMap, ruleVetoData, getDefaultSorting } from './data';
import { TbArrowAutofitContent } from "react-icons/tb";
import { RiTableFill, RiFullscreenFill } from "react-icons/ri";
import { Drawer, Button } from 'shared';
import s from './GridCardsWrapper.module.scss';

export const GridCardsWrapper: React.FC = () => {

  // still needed for calculating fitting cells.
  const refGridWrapper                            = useRef<HTMLDivElement>(null);
  const [showDrawerColumns, setShowDrawerColumns] = useState(false);
  const [showDrawerDetails, setShowDrawerDetails] = useState(false);

  const [allTh, setAllTh]                         = useState(allTableHeadingsMap); // all columns, including invisible
  const [cols, setCols]                           = useState( prepareHeadingData(allTh) ); // only visible columns set
  const [data, setData]                           = useState( prepareData(ruleVetoData, getDefaultSorting(cols, 'id')) );

  const [sortedBy, setSortedBy]                   = useState<ISortedBy>( getDefaultSorting(cols, 'id') );
  const [currentElement, setCurrentElement]       = useState<RuleVeto | null>(null); // Current selected ruleVeto

  // Prepare data
  useEffect(() =>
    setData( prepareData(ruleVetoData, sortedBy) ),
    [sortedBy, sortedBy.direction, sortedBy.column]
  );

  // Prepare columns
  useEffect(() =>
    setCols( prepareHeadingData(allTh) ),
    [allTh]
  );

  // make column content size, but not more than maxWidth
  function setColumnsMax() {
    setCols(
      cols.map((element: TableHeading) => {
        element.width = element.maxWidth + gridOptions.defaultContentOffset;
        return element;
      })
    );

  }

  // Determine max possible width for columns
  const setColumnMaxWidth = (el: TableHeading, currentWidth: number) => {
    setCols( cols.filter((element: TableHeading) => {
      if (el.id !== element.id) {
        return element;
      } else {

        if (element.maxWidth < currentWidth) {
          element.maxWidth = currentWidth;
        }

        if (element.maxWidth < gridOptions.minColumnWidth) {
          element.maxWidth = gridOptions.minColumnWidth;
        }

        return element;
      }
    }));
  }

  // Resize column
  const resizeColumn = (el: TableHeading, offset: number) =>
    setCols(resizeColumnHelper(cols, el, offset));

  // Update column set by show/hide particular column
  const toggleColumn = (el: TableHeading) =>
    setAllTh( toggleColumnHelper(allTh, el) );

  // Show setup columns dialog
  const setupColumns = () =>
    setShowDrawerColumns(!showDrawerColumns);

  // avoid scroll in table
  const fitToWidth = () => {

    let fullWidth = refGridWrapper.current?.getBoundingClientRect().width  || 0;
    let newArr = cols.map((el) => el.maxWidth);
    let sum = newArr.reduce((acc, currValue) => acc + currValue, 0);
    let ratioArr = cols.map((el) => el.maxWidth / sum);
    let resultWidth = ratioArr.map((el) => el * fullWidth);

    setCols(
      cols.map((el, i) => {
        el.width = resultWidth[i];
        return el;
      })
    );

  }

  // @ts-ignore
  return (
    <div className={s.GridWrapper} ref={refGridWrapper}>

      <div className={s.GridHeader}>

        <h2 style={{ marginBottom: '1em' }}>Rule vetos monitor (cards)</h2>

        <div className={s.setupColumns} >
          <Button iconButton prefix={<RiFullscreenFill />} size={'sm'} theme={'base'} variant={'light'} onClick={fitToWidth} />
          <Button iconButton prefix={<TbArrowAutofitContent />} size={'sm'} theme={'base'} variant={'light'} onClick={setColumnsMax} />
          <Button iconButton prefix={<RiTableFill />} size={'sm'} theme={'base'} variant={'light'} onClick={setupColumns} />
        </div>

      </div>

      <Grid columns={cols} setColumnMaxWidth={setColumnMaxWidth} sortedBy={sortedBy} setSortedBy={setSortedBy} resizeColumn={resizeColumn}>


        <TableBody>
          { data.map((element: RuleVeto, j: number) =>
            (
              <TableRow
                striped
                key={j}
                fullWidth={calculateFullWidth(cols)}
                onClick={() => {
                  setCurrentElement(element);
                  setShowDrawerDetails(true);
                }}
              >
                { cols.map((el: TableHeading, i: number) => {

                  // @ts-ignore
                  if (el.id === 'status') {
                    switch (element[el.id]) {
                      case 'active':
                        return <TD setColumnMaxWidth={setColumnMaxWidth} theme={'success'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'deactivated':
                        return <TD  setColumnMaxWidth={setColumnMaxWidth} theme={'muted'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'expired':
                        return <TD setColumnMaxWidth={setColumnMaxWidth} theme={'danger'} el={el} key={i}>{ element[el.id] }</TD>
                      default:
                        return <TD setColumnMaxWidth={setColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                    }
                  }

                  if (el.id === 'id') {
                    return <TD link={'/'} setColumnMaxWidth={setColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  if (el.id === 'ruleId') {
                    return <TD link={'/'} setColumnMaxWidth={setColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  // @ts-ignore
                  return <TD setColumnMaxWidth={setColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                })}
              </TableRow>
            )
          )}
        </TableBody>

        <Drawer drawerTitle={'Setup columns'} showDrawer={showDrawerColumns} setShowDrawer={setShowDrawerColumns} initialWidth={400}>
          <ColumnsSetupDialog allTh={allTh} toggleColumn={toggleColumn} setAllTh={setAllTh} />
        </Drawer>

        <Drawer drawerTitle={'Details'} showDrawer={showDrawerDetails} setShowDrawer={setShowDrawerDetails} initialWidth={400}>
          <div>Details</div>
          {currentElement && Object.keys(currentElement).map((el, i) =>
            <div key={i}>{(currentElement as any)[el]}</div>
          )}
        </Drawer>

      </Grid>



    </div>
  );
}
