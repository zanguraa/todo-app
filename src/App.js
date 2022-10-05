import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import InputText from "./components/InputText";
import TodoContainer from "./components/TodoContainer";
import MobileFooter from "./components/MobileFooter";
import ItemCount from "./components/ItemCount";

export const ThemeContext = createContext(null);

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className="h-full  justify-center flex flex-col items-center py-12 px-6 w-full min-w[327px]"
        id={theme}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <InputText todos={todos} setTodos={setTodos} />
        <div className="w-full max-w-[520px]">
          <TodoContainer todos={todos} setTodos={setTodos} />
          <ItemCount todos={todos} />
  
        </div>

        <MobileFooter todos={todos} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
