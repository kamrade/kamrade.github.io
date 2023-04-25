export interface TableHeading {
  id: string;
  title: string,
  isShowed: boolean,
  position: number,
  width: number,
}

export type SortDirection = 'acc' | 'dec';

export interface ISortedBy {
  column: string;
  direction: SortDirection;
}
