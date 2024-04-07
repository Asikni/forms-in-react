import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Current Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const ThemeUsingContext = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeUsingContext;
