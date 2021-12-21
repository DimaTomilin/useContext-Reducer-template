import React, { useContext, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import mainContext from '../contexts/main-context';
import { v4 as uuidv4 } from 'uuid';

export default function AddFriendForm() {
  const NameELe = useRef(null);
  const AgeEle = useRef(null);
  const { dispatch } = useContext(mainContext);

  const addFriend = () => {
    dispatch({
      type: 'ADD_FRIEND',
      payload: {
        id: uuidv4(),
        name: NameELe.current.value,
        age: AgeEle.current.value,
      },
    });
    NameELe.current.value = '';
    AgeEle.current.value = '';
  };

  return (
    <Container style={{ margin: '0 auto', width: '50%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Friend Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter friend name"
            ref={NameELe}
          />
          <Form.Label>Friend Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter friend age"
            ref={AgeEle}
          />
        </Form.Group>
        <Button variant="primary" onClick={addFriend}>
          Create
        </Button>
      </Form>
    </Container>
  );
}
