import React from 'react';
import Feedback from './feedback';
import GuessForm from './guess-form';
import './guess-section.css';

const GuessSection = (props) => {
  const {feedback,guessCount}=props;
  return(
    <section className='guesssection' aria-label="Guess section" aria-describedby="feedback">
    <Feedback feedback={feedback} guessCount={guessCount}/>
    <GuessForm onMakeGuess={ guess => props.onMakeGuess(guess)}/>
    </section>
  );
}

export default GuessSection;
