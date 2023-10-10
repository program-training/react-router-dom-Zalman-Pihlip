import { useEffect, useState, CSSProperties } from "react";
import UserInterface from "../interfaces/UserInterface";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../url";
type UserParams = {
  userId: string;
};
const style: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  border: "black solid 2px",
  justifyContent: "space-between",
  alignItems: "center",
  width: "250px",
  margin: "auto",
  borderRadius: "15px",
  backgroundColor: "aqua",
  textDecoration: "none",
  color: "black"
};
const UserDetails = () => {
  const { userId } = useParams<UserParams>();
  const [user, setUser] = useState<UserInterface>();
  useEffect(() => {
    axios
      .get(`${BASE_URL}users/${userId as string}`)
      .then(({ data }) => setUser(data as UserInterface))
      .catch(({ message }) => console.log(message));
  }, [userId]);
  if (!user) return;
  const {
    name,
    email,
    address: { city, street },
    id,
  } = user;
  return (
    <Link to={`/toDos/${id}`} style={style}>
      <span>{name}</span>
      <span>{email}</span>
      <span>
        {city} {street}
      </span>
    </Link>
  );
};

export default UserDetails;
