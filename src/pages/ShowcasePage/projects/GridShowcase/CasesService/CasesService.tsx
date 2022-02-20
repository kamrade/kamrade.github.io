import React, {createContext, useContext, ReactChild, ReactChildren, useState, useCallback} from 'react';
import {
  casesData,
  CasesData,
  casesColumns,
  sortedByDefault,
  sortDirectionDefault,
  casesColumnsMap
} from './casesData';
import {randomIntFromInterval} from 'helpers';
import {SortDirection} from '../Grid/GridTypes';
import {orderBy} from 'lodash';


interface ICaseContext {
  getCases: () => Promise<CasesData[]>;
  getCasesColumns: () => string[];
  getSortedBy: () => string;
  setSortedBy: (value: string) => void;
  getSortDirection: () => SortDirection;
  setSortDirection: (value: SortDirection) => void;
}

interface ICaseProviderProps {
  children: ReactChild | ReactChildren;
  getCases?: () => Promise<CasesData[]>;
  getCasesColumns?: () => string[];
  getSortedBy?: () => string;
  setSortedBy?: (value: string) => void;
  getSortDirection?: () => SortDirection;
  setSortDirection?: (value: SortDirection) => void;
}

const CasesContext = createContext<ICaseContext | null>(null);

export const getCasesColumns = () => {
  return casesColumns;
}

export const CasesProvider: React.FC<ICaseProviderProps> = (props) => {

  const [sortedBy, setSortedBy] = useState(sortedByDefault);
  const [sortDirection, setSortDirection] = useState(sortDirectionDefault as SortDirection);

  const getSortedBy = () => sortedBy;
  const getSortDirection = () => sortDirection;

  const getCases = useCallback(() => {
    let chance = randomIntFromInterval(0, 100);

    return new Promise<CasesData[]>((resolve, reject) => {
      setTimeout(() => {
        if (chance > 5) {
          resolve(casesData);
        } else {
          reject('Data retrieval error. Please reload the page.');
        }

      }, 1000);
    });

  }, []);

  const value: ICaseContext = {
    getCases: props.getCases || getCases,
    getCasesColumns: props.getCasesColumns || getCasesColumns,
    getSortedBy: props.getSortedBy || getSortedBy,
    setSortedBy: props.setSortedBy || setSortedBy,
    getSortDirection: props.getSortDirection || getSortDirection,
    setSortDirection: props.setSortDirection || setSortDirection
  };

  return (
    <CasesContext.Provider value={value}>
      {props.children}
    </CasesContext.Provider>
  )
}

export const useCases = () => useContext(CasesContext);
