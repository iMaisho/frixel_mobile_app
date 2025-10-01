import { StyleSheet, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";


function Body() {

  const {theme, setTheme} = useTheme()

  const styles = StyleSheet.create({
    container: {
      height: 500,
      backgroundColor: theme.background
}
  })

  return (
    <View style={styles.container}>

    </View>
  )
}

export default Body;
