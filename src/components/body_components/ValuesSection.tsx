import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";


function ValuesSection() {

  const {theme, setTheme} = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 50,
      gap: 20},
    textBlock: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.itemBackground,
      alignItems:"center",
      padding: 24,
     },
    titleFont: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.primary,
    },
    cardTitle: {
      fontFamily: "Orbitron-Bold",
      fontSize: 20,
      color: theme.primary
    },
    text: {
    fontFamily: "Epilogue",
      fontSize: 14,
      color: theme.primary,
      padding: 24,
      textAlign:"center"
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Le digital a votre service</Text>
      <View style={styles.textBlock}><Text style={styles.text}>Nous ne nous contentons pas de répondre à un cahier des charges : nous comprenons vos enjeux, vos contraintes et votre métier. Cette approche nous permet de vous proposer des solutions optimisées et de dépasser vos attentes.</Text></View>
      <Text style={styles.titleFont}>Nos Valeurs</Text>
      <View style={styles.textBlock}><Text style={styles.cardTitle}>Anticipation</Text><Text style={styles.text}>Nous ne subissons pas les imprévus, nous les anticipons. Chaque projet est une opportunité d’aller plus loin que la demande initiale.</Text></View>
      <View style={styles.textBlock}><Text style={styles.cardTitle}>Adaptation</Text><Text style={styles.text}>Parce que chaque client et chaque contexte sont uniques, nous ajustons nos méthodes et nos solutions pour toujours être en phase avec vos enjeux.</Text></View>
      <View style={styles.textBlock}><Text style={styles.cardTitle}>Apprentissage</Text><Text style={styles.text}>L’innovation passe par la curiosité et l’amélioration continue. Nous cultivons l’art "d’apprendre à apprendre" pour toujours proposer des solutions à la pointe.</Text></View>
    </View>
  )
}

export default ValuesSection;
