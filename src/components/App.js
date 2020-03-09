import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Copy from './common/Copy';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" default render={() => (<div className="home">Home</div>)} />
        <Route exact path="/about" render={() => (<div className="about">About</div>)} />
      </Switch>
      <Copy>
        <p>Hello There! This works!</p>
      </Copy>
    </div>
  );
}

export default App;
