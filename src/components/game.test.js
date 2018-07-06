import React from 'react';
import {shallow,mount} from 'enzyme';
import Game from './game';

describe('Game', () => {
  it('Should render without crashing', () => {
    shallow(<Game />)
  });

///Used Thinkful solutions to figure it out
  it('Should be able to start a new game', () => {
    const wrapper = shallow(<Game />);
    //Change the state to simulate an existing Game
    wrapper.setState({
      guesses:[10,15,20,26],
      feeback:'Awesome',
      correctAnswer: -1
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make Your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    // expect(wrapper.text()).toEqual(`You've made {5} guesses!`)
  });

  it('Should be able to make guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 25
    });
    wrapper.instance().makeGuess(20);
    expect(wrapper.state('guesses')).toEqual([20]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(15);
    expect(wrapper.state('guesses')).toEqual([20,15]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(25);
    expect(wrapper.state('guesses')).toEqual([20,15,25]);
    expect(wrapper.state('feedback')).toEqual('You got it!');

  });


});
