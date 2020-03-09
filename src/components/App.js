import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Switch>
        <Route exact path="/" default render={() => (<div className="home">Home</div>)} />
        <Route exact path="/about" render={() => (<div className="about">About</div>)} />
      </Switch>
    </div>
  );
}

export default App;
