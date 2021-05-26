export interface IMainMenu {
  title: string;
  link: string;
}

export interface IDataModel {
  currentLanguage: string;
  mainMenu: IMainMenu[];
}
