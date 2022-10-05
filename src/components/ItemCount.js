import React from "react";

export default function ItemCount(props) {
  return (
    <div className="item-count flex justify-between  max-w-[520px] w-full md:hidden  h-12 px-4  items-center  bg-white rounded-md">
      <p className="text-[#9495A5] text-xs">{props.todos.length} item left</p>

      <p className="text-[#9495A5] text-xs">Clear Completed</p>
    </div>
    
  );
}
