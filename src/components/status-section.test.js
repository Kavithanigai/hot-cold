import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Should render without crashing', () => {
      shallow(<StatusSection auralStatus="" guesses={[]}/>);
  });
});
