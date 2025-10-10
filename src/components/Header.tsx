import { StyleSheet, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import Brand from "./header_components/Brand";
import ToggleTheme from "./header_components/ToggleTheme";
function Header() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 100,
      backgroundColor: theme.primary,
      alignItems: "center",
      borderRadius: 50,
      position: "absolute",
      top: 50,
      left: 0,
      right: 0,
      zIndex: 10,
      paddingLeft: 40,
      paddingRight: 40,
    },
    interactiveElements: {
      display: "flex",
      flexDirection: "row",
      height: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Brand></Brand>
      <ToggleTheme></ToggleTheme>
    </View>
  );
}

export default Header;
