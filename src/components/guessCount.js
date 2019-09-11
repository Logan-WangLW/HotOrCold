import React from 'react';
import './guessCount.css';

export default function GuessCount(props) {
  return (
    <p>
      Guess #<span id="count">{props.count}</span>!
        </p>
  );
}
