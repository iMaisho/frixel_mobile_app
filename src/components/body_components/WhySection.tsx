import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import WhyCard from "./WhyCard";


function WhySection() {

  const {theme, setTheme} = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 50,
      gap:20
    },
    textBlock: {
      display: "flex",
      flexDirection: "row"
     },
    titleFont: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.primary,
    },
    logoFont: {
      fontFamily: "Ethnocentric",
      fontSize: 30,
      color: theme.secondary,
      textAlign: "center"
    },
  })

  return (
    <View style={styles.container}><View style={styles.textBlock}>
      <Text style={styles.titleFont}>Pourquoi </Text><Text style={styles.logoFont}>Frixel ?</Text></View>
      <WhyCard
        icon="prout"
        title="MVPaaS"
        description="Vous avez une idée de produit mais vous ne savez pas comment vous projeter sur sa viabilité / faisabilité sur le long terme ?
Nous créons pour vous un MVP as a Service : une version testable, rapide et fonctionnelle de votre idée, conçue pour valider votre concept, séduire vos premiers utilisateurs et convaincre vos investisseurs.
Du prototype au lancement, nous gérons tout — vous vous concentrez sur la vision, nous accélérons sa concrétisation."
        price="Livré en moins de 3 mois ; à partir de 15.000€ euros.">
        </WhyCard>

      <WhyCard
        icon="prout"
        title="Tarification attractive"
        description="Bénéficiez de talents experts basés sur Paris, avec la réactivité et la proximité que vous attendez, tout en profitant de tarifs aussi compétitifs que le nearshore.
Pas de décalage horaire, pas de barrière culturelle — juste la performance au meilleur coût."
        price="À partir de 380€/jour (en fonction de la séniorité du profil).">
        </WhyCard>


      <WhyCard
        icon="prout"
        title="G33KZ"
        description="Notre passion est de construire des applications web, mobiles et métiers sur mesure afin d'améliorer l'expérience utilisateur.
Nous utilisons des technologies modernes comme Elixir, utilisées par les acteurs majeurs du temps réel et de la communication multi-utilisateurs comme Facebook Messenger, Discord, Whatsapp, Pinterest"
        price="">
        </WhyCard>
    </View>
  )
}

export default WhySection;
