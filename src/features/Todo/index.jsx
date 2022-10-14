import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todolist = [
    {
      id: 1,
      tittle: "Eart",
    },
    {
        id: 2,
        tittle: "North",
    },
    {
      id: 4,
      tittle: "West",
    },
    {
      id: 4,
      tittle: "South",
    },
];
  return(
  <div>
    <h3>Todo List</h3>
    <TodoList todoList={todolist}/>
  </div>
  );
}

export default TodoFeature;
