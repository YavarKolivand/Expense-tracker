import { createContext } from "react";
type themeContextType = {
    darkMode: boolean;
    toggleTheme: ()=> void;
}

const ThemeContext = createContext<themeContextType | undefined>(undefined);

export default ThemeContext;