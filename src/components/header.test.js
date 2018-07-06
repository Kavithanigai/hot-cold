import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
  it('Should render without crashing', () => {
      shallow(<Header />);
  });
});
