import React from 'react';
import './Users.css';

const Users = (props) => {
    const handleAddUsers = props.handleAddUsers;
   
   
    const {name,picture,phone, email} = props.usersData;
    
    return (
      <div className = "user-info">
            <div className="profile">
                <div className="user-content">
                    <img src={picture} alt=""/>
                    <div className="user-details">
                    <h4>{name}</h4>
                    <p><small>{email}</small></p>
                    <p><small>{phone}</small></p>
                    <button onClick={ () => handleAddUsers(props.usersData)} className="add-button">Add User</button>
                    </div>

                </div>
         </div>
        </div>
   
    );
};

export default Users;