import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Shows from './components/Shows/Shows';
import Show from './components/Show/Show';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Shows} />
        <Route exact path="/shows" component={Shows} />
        <Route path="/shows/:id" component={Show} />
      </Switch>
    </div>
  );
}

export default App;
