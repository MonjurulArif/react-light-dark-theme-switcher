import "./Switch.css";
import { useThemeChanger } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useThemeChanger();
  return (
    <label className="switch">
      <input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
