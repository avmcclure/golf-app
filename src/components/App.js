import React from 'react';
import Scorecard from 'Components/scorecard/Scorecard';

import 'Assets/normalize.css'
import 'Styles/styles.scss';

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <Scorecard />
      </div>
    </div>
  );
}
