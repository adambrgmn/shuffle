import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RandomSort } from './pages/RandomSort';
import { RandomPick } from './pages/RandomPick';
import { RandomGroup } from './pages/RandomGroup';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <header>
          <h1>Shuffle</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/random-sort">Random Sort</Link>
              </li>
              <li>
                <Link to="/random-pick">Random Pick</Link>
              </li>
              <li>
                <Link to="/random-group">Random Group</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/random-sort">
              <RandomSort />
            </Route>
            <Route path="/random-pick">
              <RandomPick />
            </Route>
            <Route path="/random-group">
              <RandomGroup />
            </Route>
            <Route>
              <div>Hello world</div>
            </Route>
          </Switch>
        </main>
      </Router>
    </React.StrictMode>
  );
};

export default App;
