import React from "react";

export default function InputCheckbox(props) {

  return (
    <div>
      <label className="flex gap-2 items-center">
        <input type="checkbox" className="input-checkbox hidden" />
        <span className="checkbox"></span>
        {props.children}
      </label>
    </div>
  );
}
