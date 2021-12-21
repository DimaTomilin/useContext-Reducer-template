import React from 'react';
import NavBar from './NavBar';
import MainState from '../contexts/mainState';
import ListBooks from './ListBooks';

export default function MainContainer() {
  return (
    <div>
      <MainState>
        <NavBar />
        <hr />
        <ListBooks />
      </MainState>
    </div>
  );
}
