import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { UIKitButtonPage } from './UIKitButtonPage/UIKitButtonPage';

export const UIKitPage = () => {
  return (
    <div className='container'>
      <header className="pt-5 pb-3" />
      <h1 className="mb-9">UIKit — v.1.1.0</h1>
      <Switch>
        <Route path='/apps/uikit/alerts'><div>Alerts</div></Route>
        <Route path='/apps/uikit/badge'><div>Badge</div></Route>
        <Route path={'/apps/uikit/breadcrumb'}><div>Breadcrumbs</div></Route>
        <Route path={'/apps/uikit/buttons'}><UIKitButtonPage /></Route>
      </Switch>

    </div>
  );
}
