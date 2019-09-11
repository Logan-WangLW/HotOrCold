import React from 'react';
import NavBar from './navBar';
import './header.css';

export default function Header(props) {
  return (
    <header>
      <NavBar resetGame={() => props.resetButton()} />
      <h1>Hot Or Cold</h1>
    </header>
  )
}