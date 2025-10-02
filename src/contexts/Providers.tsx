import { ReactNode } from "react";
import { FontProvider } from "./FontContext";
import { ThemeProvider } from "./ThemeContext";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <FontProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FontProvider>
  );
};
