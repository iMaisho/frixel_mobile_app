import { createContext, ReactNode, useContext, useState } from "react";
import Theme from "../interfaces/ThemeInterface";
import themeDark from "../themes/ThemeDark";
import themeLight from "../themes/ThemeLight";

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}



const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(themeLight);
  const toggleTheme = () => {
  setTheme(prev => prev === themeLight ? themeDark : themeLight);
};

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeContext, ThemeProvider, useTheme };
