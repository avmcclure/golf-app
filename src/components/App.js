import React from 'react';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import Scorecard from 'Components/scorecard/scorecard';

import 'Assets/normalize.css';
import 'Styles/styles.scss';

App.propTypes = {
  store: propTypes.object,
  history: propTypes.object
};

function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path="/scores" component={Scorecard} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default hot(module)(App);
