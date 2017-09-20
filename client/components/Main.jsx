import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BuildRoutes from './BuildComponents/BuildRoutes';
import Overview from './Overview';
import Recommendations from './Recommendations/Recommendations';
import Performance from './Performance';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Overview} />
      <Route path="/builds" component={BuildRoutes} />
      <Route path="/performance" component={Performance} />
      <Route path="/recommendations" component={Recommendations} />
    </Switch>
  </main>
);

export default Main;
