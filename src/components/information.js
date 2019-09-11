import React from 'react';
import './information.css';

export default function Information(props) {
  return (
    <div className="overlay" id="modal">
      <div className="content">
        <h3>What is this?</h3>
        <div>
          <p>This is a number guessing game. This is how you play: </p>
          <ul>
            <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
            <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
            <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
          </ul>
          <p>So, Are you ready?</p>
          <button className="close" onClick={() => props.what()}> Yes! </button>
        </div>
      </div>
    </div>
  );
}
