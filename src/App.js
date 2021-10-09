import React from 'react';
import List from './Pokemon/List/List';
import View from './Pokemon/View/View';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/pokemons/list">POKELIST CDA Distribuidora</Link>
        </h1>
        <Switch>
          <Route path="/pokemons/list" component={List} />
          <Route path="/pokemons/:name" component={View} />
          <Route path="/" exact>
            <Redirect to="/pokemons/list" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}