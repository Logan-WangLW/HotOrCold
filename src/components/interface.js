import React from 'react';
import Header from './header';
import GuessArea from './guessArea';
import GuessCount from './guessCount';
import GuessList from './guessList';
import { getFeedback } from './getFeedback';

const createAnswer = () => Math.floor(Math.random() * 100) + 1;

const initialState = {
  userGuesses: [],
  feedback: 'Make a guess!'
};

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      RNGAnswer: createAnswer(),
      showWhat: false
    }
  }
  resetGame() {
    this.setState({
      ...initialState,
      RNGAnswer: createAnswer()
    })
  }
  guessFunction(guess) {
    if (this.state.userGuesses.includes(guess)) {
      this.setState({ feedback: 'number is a dulpicate' });
      return;
    }
    if (guess < 0 || guess > 101) {
      this.setState({ feedback: 'number must be between 0 and 100' });
      return;
    }
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a number' });
      return;
    }
    const feedback = getFeedback(guess, this.state.RNGAnswer);

    this.setState({
      feedback,
      userGuesses: [...this.state.userGuesses, guess]
    });
  }
  what() {
    this.setState({
      showWhat: !this.state.showWhat
    });
  }

  render() {
    const { feedback, userGuesses } = this.state;
    const count = userGuesses.length;

    return (
      <div>
        <Header resetButton={() => this.resetGame()} what={() => this.what()} showWhat={this.state.showWhat} />
        <GuessArea
          feedback={feedback}
          onSubmit={guess => this.guessFunction(guess)}
        />
        <GuessCount count={count} />
        <GuessList guesses={this.state.userGuesses} />

      </div>
    )
  }
}