import React from 'react';
import NavBar from './NavBar';
import MainState from '../contexts/mainState';
import ListFriends from './ListFriends';
import AddFriendForm from './AddFriendForm';

export default function MainContainer() {
  return (
    <div>
      <MainState>
        <NavBar />
        <hr />
        <AddFriendForm />
        <hr />
        <ListFriends />
      </MainState>
    </div>
  );
}
