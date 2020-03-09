import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import LoremIpsum from './LoremIpsum';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" default render={() => (<div className="home">Home</div>)} />
        <Route exact path="/about" render={() => (<div className="about">About</div>)} />
      </Switch>
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
    </div>
  );
}

export default App;
