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
      RNGAnswer: createAnswer()
    }
  }
  guessFunction(guess) {

    const feedback = getFeedback(guess, this.state.RNGAnswer);

    this.setState({
      feedback,
      userGuesses: [...this.state.userGuesses, guess]
    });
  }

  render() {
    const { feedback, userGuesses } = this.state;
    const count = userGuesses.length;

    return (
      <div>
        <Header />
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