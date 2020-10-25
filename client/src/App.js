import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './store/actions/auth';
import setAuthToken from './utils/setAuthToken';
//Dashboardlike routes
import Checkout from './pages/Checkout';
import Success from './pages/Success';

import './assets/build/main-min.css';
// import './assets/css/main.css';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    if(localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="flex-container">
          <Switch>
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/success" component={Success} />
            <Route component={Routes} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
