import themeLight from "@/src/themes/ThemeLight";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleTheme() {
  const { theme, setTheme, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 50,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={toggleTheme}>
      <Ionicons
        name={theme === themeLight ? "moon" : "sunny"}
        size={30}
        color={theme === themeLight ? "#00000083" : "#fffb008a"}
      />
    </TouchableOpacity>
  );
}

export default ToggleTheme;
