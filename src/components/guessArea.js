import React from 'react';
import GuessForm from './guessForm';
import './guessArea.css';

//need to add feedback and number + history of numbers
export default function GuessArea(props) {
  return (
    <section className="guessArea">
      <h2 id="feedback">{props.feedback}</h2>
      <GuessForm onSubmit={props.onSubmit} />
    </section>
  );
}
