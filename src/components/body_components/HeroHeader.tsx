import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

function HeroHeader() {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: 500,
      backgroundColor: theme.backgroundLight,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      paddingTop: 100,
    },
    logo: { height: 150, width: 150, marginRight: 10, borderRadius: 20 },
    logoFont: {
      fontFamily: "Ethnocentric",
      fontSize: 40,
      color: "white",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/frixel-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.logoFont}>Le digital au service de l'humain</Text>
    </View>
  );
}

export default HeroHeader;
