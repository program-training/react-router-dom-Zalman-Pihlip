import { useState, useEffect, CSSProperties } from "react";
import ToDoInterface from "../interfaces/ToDoInterface";
import axios from "axios";
import BASE_URL from "../url";
import { Link, useParams } from "react-router-dom";

type toDosParams = {
  userId: string;
};

const styleToDo = {
  border: "2px solid black",
  borderRadius: "15px",
  backgroundColor: "aqua",
  textDecoration: "none",
  color: "black",
  width: "200px",
 height: "200px",
 margin: "5px",
 paddingTop: "5px"
};

const styleContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
 flexWrap: "wrap",
 alignItems: "center",
 textAlign: "center",
 
};

const ToDos = () => {
  const { userId } = useParams<toDosParams>();
  const [toDos, setToDos] = useState<ToDoInterface[]>();
  useEffect(() => {
    axios
      .get(`${BASE_URL}todos`)
      .then(({ data }) => setToDos(data as ToDoInterface[]))
      .catch(({ message }) => console.log(message));
  });
  return (
    <div style={styleContainer}>
      {toDos &&
        toDos.map((toDo) => {
          if (toDo.userId.toString() === userId)
            return (
              <Link
                key={toDo.id}
                to={`/toDoDetails/${toDo.id}`}
                style={styleToDo}
              >
                <span>{toDo.title}</span>
              </Link>
            );
        })}
    </div>
  );
};

export default ToDos;
