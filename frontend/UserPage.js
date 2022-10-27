import React, { useState } from 'react';
import { Link } from "react-router-dom";


function User({user}){
  const [active, setActive] = useState(user.is_active)
  function clickEvent(e){
    setActive(!active);
  }
  return(
    <a href="#" className={"list-group-item list-group-item-action" +(active ? " active" : "")} aria-current="true" key = "{user.name}" >
        <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">{user.name}</h6>
            <small>{active ? "Active": "Inactive"}</small>
          
          </div>
          <p className="mb-1">{user.email}</p>
          <button onClick={clickEvent} type="button" className={active ? "btn btn-light": "btn btn-outline-primary"}>{active ? "Deactivate" : "Activate"} </button>    
        
          </a>
          
    )
  }
    
  




function UserList({users}){
  const [active, setActive] = useState()
  return <div className="list-group">
    {users.map((user) => <User user = {user} key = {user.name} ></User> )}
  </div>
  
}

const userList =[
  { name:"Hector",
  is_active: true,
  email:"hector@tec.mx"
  }, 
  { name:"Paola",
  is_active: true,
  email:"paola@tec.mx"
  }, 
  { name:"Vanessa",
  is_active: true,
  email:"vanessa@tec.mx"
  }
]

function UserPage() {
  return (
    <>
    <h1>User List</h1>
    <UserList users={userList}></UserList>
    <Link to = "/">
            <button type="button" class="btn btn-primary">Return Home</button>
          </Link>
    </>
  );
}

export default UserPage;