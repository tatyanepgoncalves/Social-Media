import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeSwitcher.scss";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher-button">
      {theme === "light" ? (
        <Moon size={30} className="icon-moon" />
      ) : (
        <Sun size={30} className="icon-sun" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
