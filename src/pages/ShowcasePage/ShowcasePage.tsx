import React, {useEffect, useRef, useState} from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import s from './ShowcasePage.module.scss';

import {Button, Icon} from "shared";
import {Aside} from "components/Aside/Aside";

import Wheelson from "./projects/Wheelson/Wheelson";
import RxTutorial from "./projects/RxTutorial/RxTutorial";
import Exchange from "./projects/Exchange/Exchange";
import Formaline from "./projects/Formaline/Formaline";
import NoMatch from "./projects/NoMatch/NoMatch";
import {LineChartPage} from "./projects/LineChart/LineChartPage";

import {useWindowSize} from "hooks/useWindowSize";
import {useOnClickOutside} from "hooks/useOnClickOutside";
import classNames from "classnames/bind";
import {PrivateRoute} from "components/ProvideAuth/PrivateRoute";

const sx = classNames.bind(s);

const showAsideBreakpoint = 768;

export const Main = () => {

  let { path } = useRouteMatch();

  const [ showAside, setShowAside ] = useState(true);
  const [ showAsideMemo, setShowAsideMemo ] = useState(true);

  const refAside = useRef<HTMLDivElement>(null);
  const refAsideToggler = useRef<HTMLDivElement>(null);

  const size = useWindowSize();

  // save showAside value if screen more than ${showAsideBreakpoint} px
  useEffect(() => {
    if (size?.width >= showAsideBreakpoint) {
      setShowAsideMemo(showAside);
    }
  }, [showAside, size.width]);

  // it should work only for small screens and when Aside is showed (to hide it)
  useOnClickOutside([refAside, refAsideToggler], () => {
    setShowAside(false);
  }, (showAside && size.width < showAsideBreakpoint));

  // hide aside when after window resizing screen width become smaller than ${showAsideBreakpoint} (md-breakpoint)
  useEffect(() => {
    if (size.width && size.width < showAsideBreakpoint) {
      setShowAside(false);
    } else {
      setShowAside(showAsideMemo);
    }
    // eslint-disable-next-line
  }, [size.width, setShowAside]);

  const toggleAside = () => {
    setShowAside(!showAside);
  }

  const hideAsideIfMobile = () => {
    if (size.width < showAsideBreakpoint) {
      setShowAside(false);
    }
  }

  return (
    <div className={s.Main}>

      <div className={s.AsideToggler} ref={refAsideToggler}>
        <Button onClick={ toggleAside }>
          <Icon color="#212529" icon="hamburger" size={20} stroke={2} />
        </Button>
      </div>

      <Aside isShowing={showAside} ref={refAside} hide={ hideAsideIfMobile }/>

      <div className={sx({
        Content: true,
        ContentExpanded: !showAside
      })}>
        <Switch>
          <Route exact path={path}><Redirect to='/apps/linechart' /></Route>
          <Route exact path={`${path}/wheelson`}><Wheelson /></Route>

          <PrivateRoute exact path={`${path}/rx-tutorial`}><RxTutorial /></PrivateRoute>

          <Route exact path={`${path}/linechart`}><LineChartPage /></Route>
          <Route exact path={`${path}/exchange`}><Exchange /></Route>
          <Route exact path={`${path}/formaline`}><Formaline /></Route>
          <Route path={`${path}/**`}><NoMatch /></Route>
        </Switch>
      </div>
    </div>
  );
}
