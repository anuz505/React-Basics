import React, { useState } from "react";
import { createContext } from "react";
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("#000");

  function toggleTheme() {
    setTheme((theme) => (theme === "#000" ? "#fff" : "#000"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
