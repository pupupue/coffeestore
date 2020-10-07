import React from 'react';
import { Route, Switch } from 'react-router-dom';

//routes
//needs auth components
//use for admin access
// import PrivateRoute from '../routing/PrivateRoute';

//pages
import Shop from '../../pages/Shop';
import About from '../../pages/About';
import Menu from '../../pages/Menu';
import Product from '../../pages/Product';
import Landing from '../../pages/Landing';
import Locations from '../../pages/Locations';

//utility
import Alert from '../alert/Alert';

//404
import NotFound from '../../pages/NotFound';

const Routes = props => {
  return (
    <div className="flex-main">
      <Alert />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/product/:id" component={Product} />

        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
