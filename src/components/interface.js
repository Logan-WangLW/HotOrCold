import React from 'react';
import Header from './header';
import GuessArea from './guessArea';

export default function HotOrColdGame(props) {
  return (
    <div className="HotOrCold">
      <Header />
      <section className='guessSection'>
        <GuessArea />
      </section>
    </div>
  )
}