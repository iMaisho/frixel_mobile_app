import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

function BurgerMenu() {
  const styles = StyleSheet.create({
    container: {
      width: 50,
      backgroundColor: "#bd6f17ff",
    },
  });

  return <View style={styles.container}></View>;
}

export default BurgerMenu;
