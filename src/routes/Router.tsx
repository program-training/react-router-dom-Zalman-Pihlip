import { Route, Routes } from "react-router-dom";
import ROUTES from "./routerModel";
import Users from "../users/Users";
import ToDos from "../ToDos/ToDos";
import ToDoDetails from "../ToDos/ToDoDetails";
import UserDetails from "../users/UserDetails";
const Router = () => {
  return <Routes>
    <Route path={ROUTES.users} element={<Users/>}/>
    <Route path={ROUTES.userDetails} element={<UserDetails/>}/>
    <Route path={ROUTES.toDos} element={<ToDos/>}/>
    <Route path={ROUTES.tpDoDetails} element={<ToDoDetails/>}/>
  </Routes>;
};

export default Router;