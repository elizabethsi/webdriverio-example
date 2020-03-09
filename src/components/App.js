import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './page/Home';
import About from './page/About'

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" default component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
