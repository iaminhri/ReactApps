import React, {useState} from 'react';
import './App.css';
import AddUsers from './Users/AddUsers';
import UsersList from './Users/UsersList';

function App() {
  const [getUsersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age:uAge, id: Math.random().toString() }];
    });
  }

  return (
    <div>
       <AddUsers onAddUser={addUserHandler}></AddUsers>
       <UsersList users={getUsersList}></UsersList>
    </div>
  );
}

export default App;
