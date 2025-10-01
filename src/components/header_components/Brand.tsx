import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";


function Brand() {
  const { theme } = useTheme()


  const styles = StyleSheet.create({
    container: {
      width: 200,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    logo:{height:50, width:50, marginRight: 10, borderRadius:50
},
    logoFont: {
      fontFamily: "Ethnocentric",
      fontSize: 25,
      color: theme.background    }
  })

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/frixel-logo.png")} style={styles.logo} />
<Text style={styles.logoFont}>Frixel</Text>
    </View>
  )
}

export default Brand;
