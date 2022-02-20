import React, {useEffect, useState} from 'react';
import {defaultColumnsSize} from "../CasesService/casesData";
import {Grid} from "../Grid";
import {useCases} from '../CasesService/CasesService';

export const GridWrapper = () => {

  const [casesData, setCasesData] = useState<any>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string>('');
  const [columns, setColumns] = useState<any>(null);
  const [sortedBy, setSortedBy] = useState<string>();

  const cases = useCases();

  useEffect(() => {
    setColumns(cases?.getCasesColumns());
    setSortedBy(cases?.getSortedBy());
    cases?.getCases()
      .then((value: any) => {
        setCasesData(value);
        setIsFetching(false);
      }).catch(err => setHasError(err))
  }, [cases]);

  return (
    <div className={'GridWrapper'}>
      <Grid sortedBy={sortedBy} hasError={hasError} isFetching={isFetching} gridData={casesData} columns={columns} defaultColumnsSize={defaultColumnsSize} />
    </div>
  )
}
