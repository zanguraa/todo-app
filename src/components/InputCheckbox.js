import React, { useState } from "react";
import axios from "axios";

export default function InputCheckbox(props) {
  const [status, setStatus] = useState(props.status);

  const changeStatus = (id) => {
    let changedStatus;
    setStatus(!status);
    const editTodo = props.todos.map((todo) => {
      if (todo.id === id) {
        if (todo.status === "true") {
          todo.status = "false";

          changedStatus = "false";
        } else {
          todo.status = "true";
          changedStatus = "true";
        }
      }
      return todo;
    });
    props.setTodos(editTodo);

    axios.put(
      `http://localhost:4001/${id}`,
      {
        status: changedStatus,
      },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <label className="flex gap-2 items-center">
        <input
          onChange={() => changeStatus(props.id)}
          value={status}
          type="checkbox"
          className="input-checkbox hidden"
        />
        <span
          className={`checkbox ${
            props.status === "true" && "checkbox-checked"
          }`}
        ></span>
        {props.children}
      </label>
    </div>
  );
}
