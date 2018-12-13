import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import Scorecard from './scorecard/Scorecard';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Scorecard />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
