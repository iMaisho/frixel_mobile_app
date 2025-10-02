import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";

function ProjectsCarousel() {
  interface ProjectCardProps {
    image: string;
    tags: string[];
    title: string;
    description: string;
  }

  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: 30,
      alignItems: "center",
    },
  });

  const DATA = ProjectsData;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProjectCard
            image={item.image}
            tags={item.tags}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </ScrollView>
  );
}

export default ProjectsCarousel;
