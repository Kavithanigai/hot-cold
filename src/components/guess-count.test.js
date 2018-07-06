import React from 'react';
import {shallow,mount} from 'enzyme';
import GuessCount from './guess-count';

describe('GuessCount', () => {
  it('Should render without crashing', () => {
    shallow(<GuessCount />)
  });

  it('Should display correct guess count', () => {
    const wrapper = shallow(<GuessCount guessCount={5} />);
    expect(wrapper.text()).toEqual(`You've made 5 guesses!`)
  });
});
