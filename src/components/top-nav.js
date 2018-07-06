import React from 'react';
import './top-nav.css';

const TopNav = (props) => {
  return(
    <nav className='top-nav'>
    <ul>
      <li className='info'><a href='#what' className='what' aria-label="How to play"><h4>WHAT?</h4></a></li>
      <li className='new-game'><a href='#feedback' className='new' aria-label="Start a new game" onClick={() => props.onRestartGame()}><h4>+NEW GAME</h4></a></li>
    </ul>
    </nav>
  );
}

export default TopNav;
