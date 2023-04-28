import React, { useEffect, useState, useRef } from 'react';
import { Grid, TableHead, TableBody, TH, TD, TableRow, ISortedBy, TableHeading, gridOptions } from '.';
import { calculateFullWidth, prepareData, prepareHeadingData } from './helpers';
import { RuleVeto, allTableHeadingsMap, ruleVetoData, getDefaultSorting } from './data';
import { TbArrowAutofitContent } from "react-icons/tb";


import { RiRestartLine, RiTableFill, RiFullscreenFill } from "react-icons/ri";
import { Drawer, Checkbox, Button } from 'shared';

import s from './GridWrapper.module.scss';

export const GridCardsWrapper: React.FC = () => {

  const refGridWrapper                            = useRef<HTMLDivElement>(null);
  const [showDrawerColumns, setShowDrawerColumns] = useState(false);
  const [allTh, setAllTh]                         = useState(allTableHeadingsMap);
  const [cols, setCols]                           = useState( prepareHeadingData(allTh) );
  const [data, setData]                           = useState( prepareData(ruleVetoData, getDefaultSorting(cols, 'id')) );
  const [sortedBy, setSortedBy]                   = useState<ISortedBy>( getDefaultSorting(cols, 'id') );

  useEffect(() => {
    setData( prepareData(ruleVetoData, sortedBy) );
  }, [sortedBy, sortedBy.direction, sortedBy.column]);

  useEffect(() => {
    setCols( prepareHeadingData(allTh) );
  }, [allTh]);

  // try to make cell width for content, but not more than maxColumnWidth
  function setColumnsMax() {
    let newArr = cols.map((element: TableHeading) => {
      element.width = element.maxWidth + gridOptions.defaultContentOffset;
      return element;
    });
    setCols(newArr);
  }

  // collect max width
  function setColumnMaxWidth(el: TableHeading, currentWidth: number) {
    let newArr = cols.filter((element: TableHeading) => {
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
    });
    setCols(newArr);
  }

  function resizeColumn(el: TableHeading, offset: number) {
    let newArr = cols.filter((element: TableHeading) => {
      if (el.id !== element.id) {
        return element;
      } else {
        element.width += offset;

        if ((element.width + offset) < gridOptions.minColumnWidth) {
          element.width = gridOptions.minColumnWidth;
        }

        if ((element.width + offset) > gridOptions.maxColumnWidth) {
          element.width = gridOptions.maxColumnWidth;
        }

        return element;
      }
    });

    setCols(newArr);
  }

  function toggleColumn(el: TableHeading) {
    let newArr = allTh.filter((element: TableHeading) => {
      if (el.id !== element.id) {
        return element;
      } else {
        element.isShowed = !element.isShowed;
        return element;
      }
    });

    setAllTh(newArr);
  }

  // show/hide columns
  const setupColumns = () => {
    setShowDrawerColumns(!showDrawerColumns);
  }

  // make column content size, but not more than maxWidth
  const fillColumns = () => {
    setColumnsMax();
  }

  // avoid scroll in table
  const fitToWidth = () => {

    // Получаем ширину контейнера
    let fullWidth = refGridWrapper.current?.getBoundingClientRect().width  || 0;

    // Получаем новый массив с максимальными ширинами всех колонок
    let newArr = cols.map((el) => el.maxWidth);

    // Получаем сумму всех максимальных ширин
    let sum = newArr.reduce((acc, currValue) => acc + currValue, 0);

    // Вычисляем процентное соотношение каждой ширины
    let ratioArr = cols.map((el) => el.maxWidth / sum);

    // Проверяем, что сумма всех соотношений === 1
    let ratioSum = ratioArr.reduce((acc, currVal) => acc + currVal, 0);

    // Вычисляем новую ширину для каждой колонки, чтобы все они поместились в контейнер
    let resultWidth = ratioArr.map((el) => el * fullWidth);
    console.log(resultWidth);

    // Найти колонки с шириной меньше минимальной
    let needToIncrease = resultWidth.map((el) => gridOptions.minColumnWidth - el > 0 ? gridOptions.minColumnWidth - el : 0);
    console.log(needToIncrease);

    // Проверить сможем ли мы откусить ширину у больших, чтоб маленькие сделать побольше

      // Если сможем, то делаем

      // Если нет, то просто задаем маленьким минимальную ширину и оставляем скролл

    // Собираем и устанавливаем результирующий массив
    let resultArray = cols.map((el, i) => {
      el.width = resultWidth[i];
      return el;
    });

    setCols(resultArray);

  }

  // @ts-ignore
  return (
    <div className={s.GridWrapper} ref={refGridWrapper}>

      <div className={s.GridHeader}>

        <h2>Rule vetos monitor (cards)</h2>

        <div className={s.setupColumns} >
          <Button iconButton prefix={<RiFullscreenFill />} size={'sm'} theme={'base'} variant={'light'} onClick={fitToWidth} />
          <Button iconButton prefix={<TbArrowAutofitContent />} size={'sm'} theme={'base'} variant={'light'} onClick={fillColumns} />
          <Button iconButton prefix={<RiTableFill />} size={'sm'} theme={'base'} variant={'light'} onClick={setupColumns} />
        </div>

      </div>

      <Grid>
        <TableHead marginBottom paddingBottom fullWidth={calculateFullWidth(cols)}>
          {cols.map((el: TableHeading, i: number) =>
            <TH setColumnMaxWidth={setColumnMaxWidth} card sortedBy={sortedBy} setSortedBy={setSortedBy} resizeHandler={resizeColumn} el={el} key={i}>{el.title}</TH>)
          }
        </TableHead>

        <TableBody>
          { data.map((element: RuleVeto, j: number) =>
            (
              <TableRow key={j} fullWidth={calculateFullWidth(cols)} card>
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
      </Grid>

      <Drawer drawerTitle={'Setup columns'} showDrawer={showDrawerColumns} setShowDrawer={setShowDrawerColumns}>
        <div className="my-5">

          {allTh.map((col, i) => (
            <div key={i} className={'mb-2'}>
              <Checkbox
                labelText={col.title}
                value={col.isShowed}
                onChange={() => toggleColumn(col)}
              />
            </div>
          ))}

        </div>
      </Drawer>

    </div>
  );
}
