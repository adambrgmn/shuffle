import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Grid, GridInner } from './components/Grid';

const RandomSort = React.lazy(() => import('./pages/RandomSort'));
const RandomPick = React.lazy(() => import('./pages/RandomPick'));
const RandomGroup = React.lazy(() => import('./pages/RandomGroup'));

interface AppRoute {
  path: string;
  label: string;
  component: React.ComponentType;
}

const routes: AppRoute[] = [
  { path: '/random-sort', label: 'Sort', component: RandomSort },
  { path: '/random-pick', label: 'Pick', component: RandomPick },
  { path: '/random-group', label: 'Group', component: RandomGroup },
  { path: '/', label: 'Home', component: Home },
];

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Grid>
          <Header navLinks={routes} />

          <React.Suspense fallback={<GridInner>Loading...</GridInner>}>
            <Switch>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </React.Suspense>
        </Grid>
      </Router>
    </React.StrictMode>
  );
};

export default App;
