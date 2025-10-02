import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import ServicesCarousel from "./ServicesCarousel";

function ServicesSection() {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 50,
      gap: 20,
    },
    titleFont: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.primary,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Nos Services</Text>
      <ServicesCarousel></ServicesCarousel>
    </View>
  );
}

export default ServicesSection;
