import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import App from 'Components/App';
import createStore from './store';

function init() {
  const history = createHistory();
  const store = createStore();

  render(<App store={store} history={history} />, document.getElementById('app'));
}

init();
