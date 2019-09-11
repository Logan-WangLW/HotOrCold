import React from 'react';
import NavBar from './navBar';
import Information from './information';
import './header.css';

export default function Header(props) {
  function showInfo() {
    let information = <Information what={() => props.what()} />
    if (props.showWhat) {
      return information;
    } else {
      return;
    }
  }
  return (
    <header>
      <NavBar resetGame={() => props.resetButton()} what={() => props.what()} />
      <div>
        {showInfo()}
      </div>
      <h1>Hot Or Cold</h1>
    </header>
  )
}