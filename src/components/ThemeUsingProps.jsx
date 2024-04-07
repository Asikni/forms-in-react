import React, { useState } from "react";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div>
      <div>Current Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const ThemeUsingProps = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default ThemeUsingProps;
