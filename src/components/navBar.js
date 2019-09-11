import React from 'react';

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => props.resetGame()}> New Game</button>
        </li>
      </ul>
    </nav>
  );
}
