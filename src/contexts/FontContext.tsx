import { useFonts } from "expo-font";
import { ReactNode } from "react";

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider = ({ children }: FontProviderProps) => {
  const [fontsLoaded] = useFonts({
    Ethnocentric: require("../assets/fonts/ethnocentric.ttf"),

    "Orbitron-Light": require("../assets/fonts/orbitron-light.otf"),
    "Orbitron-Medium": require("../assets/fonts/orbitron-medium.otf"),
    "Orbitron-Bold": require("../assets/fonts/orbitron-bold.otf"),
    "Orbitron-Black": require("../assets/fonts/orbitron-black.otf"),

    "Epilogue-Regular": require("../assets/fonts/Epilogue-Regular.ttf"),
    "Epilogue-Bold": require("../assets/fonts/Epilogue-Bold.ttf"),
    "Epilogue-BoldItalic": require("../assets/fonts/Epilogue-BoldItalic.ttf"),
    "Epilogue-Italic": require("../assets/fonts/Epilogue-Italic.ttf"),
    "Epilogue-Light": require("../assets/fonts/Epilogue-Light.ttf"),
    "Epilogue-LightItalic": require("../assets/fonts/Epilogue-LightItalic.ttf"),

    "UbuntuMono-Bold": require("../assets/fonts/UbuntuMono-Bold.ttf"),
    "UbuntuMono-BoldItalic": require("../assets/fonts/UbuntuMono-BoldItalic.ttf"),
    "UbuntuMono-Regular": require("../assets/fonts/UbuntuMono-Regular.ttf"),
    "UbuntuMono-Italic": require("../assets/fonts/UbuntuMono-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};
