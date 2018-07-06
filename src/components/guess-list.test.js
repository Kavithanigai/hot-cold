import React from 'react';
import {shallow,mount} from 'enzyme';
import GuessList from './guess-list';

describe('GuessList', () => {
  it('Should render without crashing', () => {
    shallow(<GuessList guesses={[]}/>)
  });

  it('Should render a list of guesses', () =>{
    const guessValues= [10,20,30];
    const wrapper = shallow(<GuessList guesses={guessValues} />);
    expect((wrapper.find('li')).length).toEqual(guessValues.length);

    //Had to check thinkful solution
    guessValues.forEach((value, index) => {
     expect((wrapper.find('li')).at(index).text()).toEqual(value.toString());
   });
  });

});
