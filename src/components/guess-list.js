import React from 'react';
import './guess-list.css';

const GuessList = (props) => {
  const guesses = props.guesses.map((guess,index) => (<li key={index}>{guess}</li>));
  return(
    <ul id="guessList" className="guessBox">
      {guesses}
    </ul>
  );
}

export default GuessList;
