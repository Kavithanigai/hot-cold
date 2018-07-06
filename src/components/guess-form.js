import React,{Component} from 'react';
import './guess-form.css';

class GuessForm extends Component{
  onSubmit(e){
    e.preventDefault();

    if(this.props.onMakeGuess){
      const inputValue= this.input.value;
      this.props.onMakeGuess(inputValue);
    }
    this.input.value='';
    this.input.focus();
  }
  
  render(){
  return(
    <form className='guessform' onSubmit={e => this.onSubmit(e)}>
      <input type='number' min='1' max='100' name="userGuess"
          id="userGuess" className="text" autoComplete="off"
          aria-labelledby="feedback" ref={input => (this.input = input)}
          required/>
      <button type='submit' name="submit"
          id="guessButton"
          className="button">Guess!</button>
    </form>
  );
}
}

export default GuessForm;
