import React, { useContext } from "react";
import { ThemeContext } from "./theme";

export default function ThemeComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme }}>
      <h1 style={{ color: theme === "#000" ? "#fff" : "#000" }}>
        The theme is {theme}
      </h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
