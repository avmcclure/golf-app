import { shallow } from 'enzyme';
import React from 'react';

import App from 'Components/App';

describe('App', () => {
  it('should render', () => {
    shallow(<App />);
  });
});
