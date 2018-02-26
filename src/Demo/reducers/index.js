import todo from "./todo";
import visibilityFilter from "./visibilityFilter";
import {combinReducers} from "redux";

const todoApp = combinReducers({
  todo,
  visibilityFilter
})

export default todoApp
