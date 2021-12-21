import React, { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import mainContext from '../contexts/main-context';
import FriendItem from './FriendItem';

export default function ListBooks() {
  const { list } = useContext(mainContext);

  return (
    <Container>
      <h4>My Friends</h4>
      <ListGroup>
        {list.map((item) => (
          <FriendItem item={item} key={item.id} />
        ))}
      </ListGroup>
    </Container>
  );
}
