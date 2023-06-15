import {GridTDTheme} from "shared/Grid";

export interface IApplicationHeading {
  id: string;
  title: string;
  isShowed: boolean;
  position: number;
  width: number;
  theme?: GridTDTheme;
  maxWidth: number;
}

export const applicationsHeading: IApplicationHeading[] = [{
  id: 'id',
  title: 'ID',
  isShowed: false,
  position: 9,
  width: 220,
  maxWidth: 0,
}, {
  id: 'title',
  title: 'Title',
  isShowed: true,
  position: 0,
  width: 220,
  maxWidth: 0,
}, {
  id: 'status',
  title: 'Status',
  isShowed: true,
  position: 1,
  width: 220,
  maxWidth: 0,
}, {
  id: 'assignedTo',
  title: 'Assigned to',
  isShowed: true,
  position: 2,
  width: 220,
  maxWidth: 0,
}, {
  id: 'riskScore',
  title: 'Risk score',
  isShowed: true,
  position: 3,
  width: 220,
  maxWidth: 0,
}];