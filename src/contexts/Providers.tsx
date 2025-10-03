import { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontProvider } from "./FontContext";
import { ThemeProvider } from "./ThemeContext";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <GestureHandlerRootView>
      <FontProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FontProvider>
    </GestureHandlerRootView>
  );
};
