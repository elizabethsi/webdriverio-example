import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Wrapper from './common/Wrapper';

function App() {
  return (
    <div className="app">
      <Header/>
      <Wrapper>
        <Switch>
          <Route exact path="/" default component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
