import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

const Main = lazy(() => import('../pages/Main'));
const Recommendation = lazy(() => import('../pages/Recommendation'));
const Categorie = lazy(() => import('../pages/Categorie'));
const Restaurant = lazy(() => import('../pages/Restaurant'));
const Search = lazy(() => import('../pages/Search'));
const Profile = lazy(() => import('../pages/Profile'));

const Loading = (
  <div>
    <ReactLoadingContainer />
  </div>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/recomendacoes" component={Recommendation} />
      <Route exact path="/categorias" component={Categorie} />
      <Route exact path="/restaurantes" component={Restaurant} />
      <Route exact path="/pesquisar" component={Search} />
      <Route exact path="/perfil" component={Profile} />
    </Switch>
  </Suspense>
);

export default Routes;
