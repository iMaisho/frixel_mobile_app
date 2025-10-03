import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import TeamCard from "./TeamCard";
import TeamData from "./TeamData";

function TeamCarousel() {
  interface TeamCardProps {
    picture: string;
    name: string;
    job: string;
    description: string;
  }

  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: 30,
      paddingLeft: 0,
      paddingRight: 0,
      alignItems: "center",
    },
  });

  const DATA = TeamData;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TeamCard
            picture={item.picture}
            name={item.name}
            job={item.job}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </ScrollView>
  );
}

export default TeamCarousel;
