import React from 'react';

//need to add feedback and number + history of numbers
export default function GuessForm(props) {
  return (
    <section className="guessArea">
      <form className="guessForm">
        <input placeholder='Enter Your Guess' type="number"></input>
        <button type="submit">Guess</button>
      </form>
    </section>
  );
}
