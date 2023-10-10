import {  useState, useEffect } from "react";
import UserInterface from "../interfaces/UserInterface";
import axios from "axios";
import BASE_URL from "../url";
import { Link } from "react-router-dom";

const styleUser = { border: "2px solid black", borderRadius: "15px", padding: "5px", backgroundColor: "aqua", textDecoration: "none", color: "black"}
const styleContainer = {display: "flex", justifyContent: "space-between"}
const Users = () => {
    const [users, setUsers]= useState<UserInterface[]>()
    useEffect( ()=> {
        axios.get(`${BASE_URL}users`)
        .then(({data}) => setUsers(data as UserInterface[]))
        .catch(({message}) => console.log( message)
        )
    },[])
   return <div style={styleContainer}>
   {users && users.map((user) => 
    <Link to={`/userDetails/${user.id}`} style={styleUser}  key={user.id}>
     <span>{user.name}</span>
     </Link>
   )
   }
   </div>
   
};

export default Users;