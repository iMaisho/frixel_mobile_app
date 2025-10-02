import { StyleSheet, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import ContactSection from "./body_components/contact_section/ContactSection";
import HeroHeader from "./body_components/HeroHeader";
import ProjectsSection from "./body_components/projects_section/ProjectsSection";
import ServicesSection from "./body_components/services_section/ServicesSection";
import TeamSection from "./body_components/team_section/TeamSection";
import ValuesSection from "./body_components/ValuesSection";
import WhySection from "./body_components/WhySection";

function Body() {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      display: "flex",
      flexDirection: "column",
    },
  });

  return (
    <View style={styles.container}>
      <HeroHeader></HeroHeader>
      <WhySection></WhySection>
      <ValuesSection></ValuesSection>
      <TeamSection></TeamSection>
      <ServicesSection></ServicesSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </View>
  );
}

export default Body;
