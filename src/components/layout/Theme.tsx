import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function Theme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme must be inside ThemeProvider");
  }

  const { darkMode, toggleTheme } = context;
  return (
    <>
      

    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm cursor-pointer"
    >
      {darkMode ? <MdOutlineLightMode /> : <CiDark />}

      <span>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  
    </>
  );
}

export default Theme;
