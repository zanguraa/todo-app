import React, { useState } from "react";
import InputCheckbox from "./InputCheckbox";
import axios from "axios";

export default function InputText(props) {
  const [text, setText] = useState("");

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      axios
        .post("//localhost:4001/", {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: {
            text: e.target.value,
            status: "true",
          },
        })

        .then((response) => {
          props.setTodos(response.data.rows);
        });
      setText("");
    }
  };

  return (
    <div className="flex gap-2 bg-white p-2 max-w-[520px] w-full min-w[327px] h-12  rounded">
      <InputCheckbox />
      <input
        className="w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={enterHandler}
        type="text"
        placeholder="enter your todo here"
      />
    </div>
  );
}
