import moonImg from "../images/icon-moon.svg";
import sunImg from "../images/icon-sun.svg";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";

export default function Navbar(props) {
  const [sun, setSun] = useState(sunImg);

  const {theme, toggleTheme} = useContext(ThemeContext);

  const updateHandler = () => {
   toggleTheme();
   setSun((prev) => prev === sunImg ? moonImg : sunImg)

    console.log(theme);
  };

  return (
    <nav className="flex justify-between w-full max-w-[520px] items-center mb-10">
      <h1 className="text-2xl text-white font-bold tracking-[.30em]	">TODO</h1>

      <img onClick={updateHandler} className="w-5 h-5" src={sun} alt="moon" />
    </nav>
  );
}
