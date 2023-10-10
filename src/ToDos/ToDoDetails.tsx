import { useEffect, useState } from "react";
import ToDoInterface from "../interfaces/ToDoInterface";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../url";
import { style } from "../style/style";

type toDoParams = {
  toDoId: string;
};

const ToDoDetails = () => {
  const [toDo, setToDo] = useState<ToDoInterface>();
  const { toDoId } = useParams<toDoParams>();
  useEffect(() => {
    axios
      .get(`${BASE_URL}todos/${toDoId as string}`)
      .then(({ data }) => setToDo(data as ToDoInterface))
      .catch(({ message }) => console.log(message));
  }, [toDoId]);
  if (!toDo) return;
  const { completed, id, title, userId } = toDo;
  return (
    <div style={style}>
      <span>{title}</span>
      <span>{userId}</span>
      <span>{id}</span>
      {completed && <span>completed</span>}
    </div>
  );
};

export default ToDoDetails;
