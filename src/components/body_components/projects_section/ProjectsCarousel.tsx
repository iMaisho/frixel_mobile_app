import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, StyleSheet, View } from "react-native";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";

function ProjectsCarousel() {
  interface ProjectCardProps {
    image: any;
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
    <View
      style={styles.container}
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
    </View>
  );
}

export default ProjectsCarousel;
