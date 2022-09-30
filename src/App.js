import React, { useState } from "react";
import Navbar from "./components/Navbar";
import InputText from "./components/InputText";
import TodoContainer from "./components/TodoContainer";
import MobileFooter from "./components/MobileFooter";
import ItemCount from "./components/ItemCount";


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="h-full  justify-center flex flex-col items-center  w-full min-w[327px]">
      <Navbar />
      <InputText todos={todos} setTodos={setTodos} />
      <div className="w-full max-w-[520px]">
        <TodoContainer todos={todos} setTodos={setTodos} />
        <ItemCount />
      </div>
      
        <MobileFooter />
      
    </div>
  );
}

export default App;
