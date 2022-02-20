import React, {createContext, useContext, ReactChild, ReactChildren} from 'react';
import {casesData, CasesData, casesColumns, sortedBy} from './casesData';
import {randomIntFromInterval} from 'helpers';

interface ICaseContext {
  getCases: () => Promise<CasesData[]>;
  getCasesColumns: () => string[];
  getSortedBy: () => string;
}

interface ICaseProviderProps {
  children: ReactChild | ReactChildren;
  getCases: () => Promise<CasesData[]>;
  getCasesColumns: () => string[];
  getSortedBy: () => string;
}

const CasesContext = createContext<ICaseContext | null>(null);

export const getCasesColumns = () => {
  return casesColumns;
}

export const getSortedBy = () => {
  return sortedBy;
}

export const getCases = () => {
  let chance = randomIntFromInterval(0, 100);

  return new Promise<CasesData[]>((resolve, reject) => {
    setTimeout(() => {
      chance > 5
        ? resolve(casesData)
        : reject('Data retrieval error. Please reload the page.');
    }, 1000);
  });

}

export const CasesProvider: React.FC<ICaseProviderProps> = (props) => {
  const value: ICaseContext = {
    getCases: props.getCases || getCases,
    getCasesColumns: props.getCasesColumns || getCasesColumns,
    getSortedBy: props.getSortedBy || getSortedBy
  };
  return (
    <CasesContext.Provider value={value}>
      {props.children}
    </CasesContext.Provider>
  )
}

export const useCases = () => useContext(CasesContext);
