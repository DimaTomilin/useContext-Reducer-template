import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import mainContext from '../contexts/main-context';

export default function FriendItem({ item }) {
  const { dispatch } = useContext(mainContext);

  const removeFriend = () => {
    dispatch({
      type: 'REMOVE_FRIEND',
      payload: item.id,
    });
  };

  const updateFriend = () => {
    const newName = prompt('Please enter new name of friend.', item.name);
    const newAge = prompt('Please enter new age of friend.', item.age);
    dispatch({
      type: 'UPDATE_FRIEND',
      payload: { id: item.id, age: newAge, name: newName },
    });
  };

  return (
    <ListGroup.Item>
      {item.name} by {item.age} years old.
      <div>
        <Button
          style={{ margin: '5px' }}
          variant="danger"
          onClick={removeFriend}
        >
          Remove
        </Button>
        <Button style={{ margin: '5px' }} variant="info" onClick={updateFriend}>
          Update
        </Button>
      </div>
    </ListGroup.Item>
  );
}
