import React from 'react';
import './feedback.css';

const Feedback = (props) =>{
  const key= props.guessCount;
  let moreGuess;
  if(key !==0){
    moreGuess = <span className="visuallyhidden">Guess again!</span>;
  }
  return(
    <h2 className='feedback' key={key} id='feedback' role="status"
      aria-live="assertive"
      aria-atomic="true">{props.feedback} {moreGuess}</h2>
  );
}

export default Feedback;
