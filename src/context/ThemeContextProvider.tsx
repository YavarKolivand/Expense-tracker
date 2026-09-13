import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

interface childrenThemeType {
  children: React.ReactNode;
}

function ThemeContextProvider({ children }: childrenThemeType) {
  const [darkMode, setDarkMode] = useState<boolean>(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "false"
  });
  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("theme", `${darkMode}`);
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
