import { useTheme } from "@/src/contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";
import IconLink from "../IconLink";
import ContactMap from "./ContactMap";

function ContactSection() {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      gap: 10,
      padding: 24,
    },
    titleFont: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.primary,
      textAlign: "center",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Nous Contacter</Text>
      <Text>
        Nous sommes en région parisienne mais restons mobiles, évidemment. Nous
        pouvons nous déplacer dans les locaux clients comme travailler à
        distance.
      </Text>
      <Text>
        Vous souhaitez discuter avec nos équipes et nous rencontrer en dehors ?
        Vous êtes les bienvenus au :
      </Text>
      <Text>5, Parvis Alan Turing, 75013, Paris (France)</Text>
      <Text>contact@frixel.fr</Text>
      <View style={styles.row}>
        <IconLink
          iconName="github"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></IconLink>
        <IconLink
          iconName="linkedin"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></IconLink>
      </View>
      <ContactMap></ContactMap>
    </View>
  );
}

export default ContactSection;
