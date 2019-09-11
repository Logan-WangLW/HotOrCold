import React from 'react';
import Header from './header';
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

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}