import React from 'react';
import {shallow,mount} from 'enzyme';
import Feedback from './feedback';

describe('Feedback', () => {
  it('Should render without crashing', () => {
    shallow(<Feedback />)
  });


  it('Should display a feeback', () => {
    const wrapper = shallow(<Feedback feedback={'test'}/>);
    expect(wrapper.contains('test')).toEqual(true);
  });

});
