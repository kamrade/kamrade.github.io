import React from 'react';
import { Route } from 'react-router-dom';
import { ProjectUnlimint } from './ProjectUnlimint';
import { ExtremeWaves } from './ExtremeWaves';
import { Krungsri } from './Krungsri';
import { B2B } from './B2B';

export const Showcase = ({ match }: any) => {

  return (

    <div className="showcase-page">

      <Route path={match.url + "/project-unlimint"} component={ProjectUnlimint} />
      <Route path={match.url + "/extreme-waves"} component={ExtremeWaves} />
      <Route path={match.url + "/krungsri"} component={Krungsri} />
      <Route path={match.url + "/b2b-card"} component={B2B} />

    </div>

  );
};
