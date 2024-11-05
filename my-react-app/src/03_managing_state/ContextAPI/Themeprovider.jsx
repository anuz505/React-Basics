import React from "react";
import { ThemeProvider } from "./theme";
import ThemeComponent from "./use";

export default function MainContextAPI() {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}
