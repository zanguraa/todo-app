import React from "react";

export default function InputCheckbox() {
  return (
    <div>
      <label>
        <input type="checkbox" className="input-checkbox hidden" />
        <span className="checkbox"></span>
      </label>
    </div>
  );
}
