import React, { createContext, useState } from 'react';
import { Switch, Route, useLocation  } from 'react-router-dom';
import s from './App.module.scss';

// --- COMPONENTS ---
import { AppHeader } from 'components/AppHeader/AppHeader';

// --- PAGES ---
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { Contacts } from './Pages/Contacts/Contacts';
import { Showcase } from './Pages/Showcase/Showcase';
import NoMatch from './Pages/NoMatch/NoMatch';


// --- DATA ---
import { IDataModel } from 'data/model';
import { enData } from 'data/lang/en';
import { ruData } from 'data/lang/ru';
import { uaData } from 'data/lang/ua';
import { capitalize } from './helpers/capitalize';

export type Language = 'en' | 'ru' | 'ua';

export interface IAppState {
  contentData: IDataModel;
  changeLanguage?: (lang: Language) => void;
}

const defaultAppState: IAppState = {
  contentData: enData
};

export const possiblePath = ['blog', 'contacts', 'about', 'showcase'];

export const MuzqCtx = createContext<IAppState>(defaultAppState);

function App() {

  const location = useLocation();
  const [state, setState] = useState(defaultAppState);

  const getCurrentRoute = () => {
    let path = location.pathname && location.pathname.split('/')[1];
    return path.length === 0 ? 'Showcase' : possiblePath.includes(path) ? capitalize(path) : 'Error 404';
  }

  const changeLanguage = (lang: Language) => {
    switch (lang) {
      case 'en':
        setState({ contentData: enData });
        break;
      case 'ru':
        setState({ contentData: ruData });
        break;
      case 'ua':
        setState({ contentData: uaData });
        break;
      default:
        setState({ contentData: enData });
        break;
    }
  }


  return (
    <div className={s.App}>

      <MuzqCtx.Provider value={{
        contentData: state.contentData,
        changeLanguage: changeLanguage
      }}>

        <AppHeader />

        <div className={s.Routes}>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/blog'><Blog /></Route>
            <Route exact path='/about'><About /></Route>
            <Route exact path='/contacts'><Contacts /></Route>
            <Route path='/showcase' component={Showcase} />
            <Route path="**"><NoMatch /></Route>
          </Switch>
        </div>

      </MuzqCtx.Provider>

    </div>
  );

}

export default App;
