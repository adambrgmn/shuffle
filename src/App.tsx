import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RandomSort } from './pages/RandomSort';
import { RandomPick } from './pages/RandomPick';
import { RandomGroup } from './pages/RandomGroup';
import { Home } from './pages/Home';
import { Header } from './components/Header';

interface AppRoute {
  path: string;
  label: string;
  component: React.ComponentType;
}

const routes: AppRoute[] = [
  { path: '/random-sort', label: 'Random Sort', component: RandomSort },
  { path: '/random-pick', label: 'Random Pick', component: RandomPick },
  { path: '/random-group', label: 'Random Group', component: RandomGroup },
  { path: '/', label: 'Home', component: Home },
];

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header navLinks={routes} />

        <main>
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </main>
      </Router>
    </React.StrictMode>
  );
};

export default App;
