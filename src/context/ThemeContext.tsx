import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

interface IProps extends React.PropsWithChildren {}

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")!)
      : false
  );

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  /*useEffect(() => {
    document.body.classList.add(`${isDarkTheme === false ? "dark" : ""}`);
  }, [isDarkTheme]);*/

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
