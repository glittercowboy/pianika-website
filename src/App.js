import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SamplePack from './components/SamplePack';
import InTheStudio from './components/InTheStudio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/in-the-studio" component={InTheStudio} />
        <Route path="/sample-pack" component={SamplePack} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;