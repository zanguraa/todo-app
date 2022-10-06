import React, { useState } from "react";
import InputCheckbox from "./InputCheckbox";
import deleteIcon from "../images/incorrect-icon.png";
import axios from "axios";

export default function Todo(props) {
  const deleteHandler = (id) => {
    const res = axios.delete(`http://localhost:4001/${id}`);

    const filteredTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(filteredTodos);
  };



  return (
    <div className="todo-text flex justify-between items-center gap-2 px-2 bg-white p-2 max-w-[520px] w-full  rounded  h-12 border-b-2 border-[#E3E4F1]">
      <InputCheckbox todos={props.todos} setTodos={props.setTodos} status = {props.todo.status} id={props.todo.id}>
        <p className={`todo-dark-text flex-1 cursor-pointer	${props.todo.status === "true" && "line-through" } text-[#494C6B]`}>{props.todo.text}</p>
      </InputCheckbox>

      <img
        onClick={() => deleteHandler(props.todo.id)}
        className="delete-icon cursor-pointer w-[12px] h-[12px]"
        src={deleteIcon}
      />
    </div>
  );
}
