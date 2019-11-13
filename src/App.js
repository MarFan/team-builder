import React, { useState } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

import './App.css';

const defaultForm = {id: null, name: "", email: "", role: ""}

function App() {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(defaultForm);
  const [editMode, setEditMode] = useState(false);

  const addUser = data => {
    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role
    }
    const selectedUser = userList.filter(u => u.id !== data.id);
    setUserList([...selectedUser, newUser]);    
  }

  const editUser = user => {
    const selectedUser = userList.filter(u => u.id === user );
    setCurrentUser(selectedUser[0]);  // not quite right ??
  }

  const deleteUser = user => {
    const selectedUser = userList.filter(u => u.id !== user);
    setUserList(selectedUser);
    setEditMode(false);
  }

  return (
    <div className="App">
      <Container>
        <Jumbotron>
          <h2>User Directory</h2>
          <Row>
            <Col xs="12" sm="4">
              <UserForm addUser={addUser} userToEdit={currentUser} editMode={editMode} defaultForm={defaultForm} />
            </Col>
            <Col xs="12" sm="8">
              <UserList users={userList} editUser={editUser} deleteUser={deleteUser} />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
