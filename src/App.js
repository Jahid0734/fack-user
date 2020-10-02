import React from 'react';
import './App.css';
import data from './fackData/data.json'
import { useState } from 'react';
import Users from './componants/Users/Users';
import Cart from './componants/Users/Cart/Cart';


function App() {
const [users, setUsers] = useState([]);

const handleAddUsers = (usersData) => {
  const addNew = [...users, usersData];
  setUsers(addNew);
  

}

  return (
    <div className="App">
      <header className="App-header">
   <h4>Total {data.length}</h4>
  <h4>total added: {users.length}</h4>
    <Cart users={users}></Cart>
   <div className="user-container">
        {
          data.map(data => <Users handleAddUsers={handleAddUsers} usersData={data}></Users>)
        }
          </div>
      </header>
  

    
    </div>
  );
}

export default App;
