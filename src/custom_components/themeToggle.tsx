import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
    }
    return false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const themeToggleHandler = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "fixed max-sm:hidden top-3 right-3 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden h-10 w-10",
        "[&>svg]:w-8! [&>svg]:h-8!"
      )}
      onClick={themeToggleHandler}
    >
      {darkMode ? (
        <Sun className="h-6 w-6 text-yellow-600" />
      ) : (
        <Moon className="h-6 w-6 text-blue-400" />
      )}
    </Button>
  );
};
export default ThemeToggle;
