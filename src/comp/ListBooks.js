import React, { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import mainContext from '../contexts/main-context';

export default function ListBooks() {
  const { list } = useContext(mainContext);

  console.log(list);
  return (
    <Container>
      <h4>My Friends</h4>
      <ListGroup>
        {list.map((item) => (
          <ListGroup.Item key={item.id}>
            {item.name} by {item.age} years old.
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
