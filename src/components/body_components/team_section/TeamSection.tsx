import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import TeamCarousel from "./TeamCarousel";

function TeamSection() {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 50,
      gap: 20,
    },
    titleFont: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.text,
      textAlign: "center",
    },
    subtitleFont: {
      fontFamily: "Epilogue-Regular",
      fontSize: 13,
      color: theme.text,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Notre équipe de passionnés</Text>
      <Text style={styles.subtitleFont}>
        Balayez latéralement pour voir les autres membres de l'équipe.
      </Text>
      <TeamCarousel></TeamCarousel>
    </View>
  );
}

export default TeamSection;
