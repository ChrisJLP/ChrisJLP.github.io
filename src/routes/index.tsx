import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/:id" component={ProjectDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;