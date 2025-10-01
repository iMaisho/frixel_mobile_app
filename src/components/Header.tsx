import { StyleSheet, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import Brand from "./header_components/Brand";
import BurgerMenu from "./header_components/BurgerMenu";
import ToggleTheme from "./header_components/ToggleTheme";
function Header() {

  const {theme} = useTheme()

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      height: 100,
      backgroundColor: theme.primary,
      alignItems:"center"
    },
    interactiveElements: {
      display: "flex",
      flexDirection: "row",
      height: 50,

    }
  })

  return (
    <View style={styles.container}>
      <Brand></Brand>
      <View style={styles.interactiveElements}>
      <ToggleTheme></ToggleTheme>
        <BurgerMenu></BurgerMenu>
        </View>
    </View>
  )
}

export default Header;
