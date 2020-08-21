import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

const Main = lazy(() => import('../pages/Main'));
const Recommendation = lazy(() => import('../pages/Recommendation'));

const Loading = (
  <div>
    <ReactLoadingContainer />
  </div>
);

const Routes: React.FC = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/recomendacoes" component={Recommendation} />
    </Switch>
  </Suspense>
);

export default Routes;
