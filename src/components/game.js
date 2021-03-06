import React,{Component} from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make Your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

restartGame(){
  this.setState({
    guesses: [],
    feedback: 'Make Your guess!',
    correctAnswer: Math.round(Math.random() * 100) + 1
  });
}

makeGuess(guess){
  guess = parseInt(guess,10);

  if (isNaN(guess)) {
       this.setState({ feedback: 'Please enter a valid number' });
       return;
     }

     const difference = Math.abs(guess - this.state.correctAnswer);

     let feedback;
     if (difference >= 50) {
       feedback = 'You\'re Ice Cold...';
     } else if (difference >= 30) {
       feedback = 'You\'re Cold...';
     } else if (difference >= 10) {
       feedback = 'You\'re Warm.';
     } else if (difference >= 1) {
       feedback = 'You\'re Hot!';
     } else {
       feedback = 'You got it!';
     }

     this.setState({
       feedback,
       guesses: [...this.state.guesses, guess]
     });

     document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';

}


  render(){
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;
  return(
    <section className='Game'>
      <Header onRestartGame={() => this.restartGame()}/>
      <GuessSection feedback={feedback}  guessCount={guessCount} onMakeGuess={guess => this.makeGuess(guess)} />
      <StatusSection guesses={guesses} />
      <InfoSection />
    </section>
  );
}
}

export default Game;
