import { GoSun, GoMoon } from "react-icons/go";
import { useTheme } from "../main.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border transition-all duration-300
        bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100
        dark:bg-gray-800 dark:text-yellow-400 dark:border-gray-700 dark:hover:bg-gray-700"
      aria-label="Toggle Dark/Light Mode"
    >
      {theme === "dark" ? <GoMoon size={18} /> : <GoSun size={18} />}
    </button>
  );
}