import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
  <ThemeProvider>
      {children}
      </ThemeProvider>
  );
};
