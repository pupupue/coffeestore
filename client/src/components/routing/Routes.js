import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../parts/Navbar';
import Footer from '../../parts/Footer';
import ScrollUp from '../../parts/ScrollUp';
//routes
//needs auth components
//use for admin access
// import PrivateRoute from '../routing/PrivateRoute';

//pages
import Cart from '../../pages/Cart';
import Shop from '../../pages/Shop';
import Menu from '../../pages/Menu';
import About from '../../pages/About';
import Product from '../../pages/Product';
import Article from '../../pages/Article';
import Landing from '../../pages/Landing';
import Locations from '../../pages/Locations';

//utility
import Alert from '../alert/Alert';

//404
import NotFound from '../../pages/NotFound';

const Routes = props => {
  return (
  <Fragment>
    <Navbar />
    <div className="flex-main">
      <Alert />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/article/:id" component={Article} />

        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
    <ScrollUp />
    <Footer />
  </Fragment>
    
  );
};

export default Routes;
