import React, { useEffect } from "react";
import Todo from "./Todo";
import axios from "axios";

export default function TodoContainer(props) {
  useEffect(() => {
    axios.get("//localhost:4001/").then((response) => {
      props.setTodos(response.data);
    });
  }, []);

  console.log(props.todos.length)

  return (
    <div className="todo-container mt-4 max-w-[520px] w-full">
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            todos={props.todos}
            setTodos={props.setTodos}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}
