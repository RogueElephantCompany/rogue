import React from 'react';
import { /*withRouter,*/ Route, Switch } from 'react-router-dom';
import { Home, Contact /*, About*/ } from './components';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
