import { ReactNode } from "react";
import { useFonts } from 'expo-font';

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider = ({ children }: FontProviderProps) => {
  const [fontsLoaded] = useFonts({
    'Ethnocentric': require('../assets/fonts/ethnocentric.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};
