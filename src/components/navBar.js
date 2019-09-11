import React from 'react';
import './navBar.css';
export default function NavBar(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <button className="what" onClick={() => props.what()}> What?</button>
        </li>
        <li>
          <button className="new" onClick={() => props.resetGame()}> New Game</button>
        </li>
      </ul>
    </nav>
  );
}
