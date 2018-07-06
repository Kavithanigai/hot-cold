import React from 'react';
import {configure,shallow,mount} from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';

//configure({adapter: new Adapter()});

import TopNav from './top-nav';

describe('<TopNavigation />', () => {
  it('Should render without crashing', () => {
      shallow(<TopNav/>);
  });

  it('Should render two top navigation items', () =>{
    const wrapper=shallow(<TopNav />);
    expect(wrapper.hasClass('top-nav')).toEqual(true);
  });

/*
  it('Should check for new game- top navigation item', () =>{
    const wrapper=mount(<TopNav />);
    expect(wrapper.hasClass('new-game')).toEqual(true);
//  const newGameNav=wrapper.find('ul');
//  expect(newGameNav.children()).have.length(2);
  //expect(['what', 'new'].every(c => wrapper.hasClass(c))).toEqual(true);
  });

*/
  it('Should start a new game when clicking - New Game', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onRestartGame={callback} />);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  });


});
