import { StyleSheet, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import HeroHeader from "./body_components/HeroHeader";


function Body() {

  const {theme, setTheme} = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background
}
  })

  return (
    <View style={styles.container}>
<HeroHeader></HeroHeader>
    </View>
  )
}

export default Body;
