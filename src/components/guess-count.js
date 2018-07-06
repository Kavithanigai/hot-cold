import React from 'react';
import './guess-count.css';

const GuessCount = (props) => {
  const multiple = props.guessCount > 1;
  const guessNoun = multiple ? 'guesses' : 'guess';
  return(
    <h2 id='guessCount'>
    {"You've made "}<span id="count">{props.guessCount}</span> {guessNoun}!
    </h2>
  );
}

export default GuessCount;
