import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('Should render without crashing', () => {
      shallow(<InfoSection />);
  });
});
