import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface ProjectCardProps {
  image: any;
  tags: string[];
  title: string;
  description: string;
}

function ProjectCard({ image, tags, title, description }: ProjectCardProps) {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: theme.itemBackground,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 30,
      marginBottom: 0,
      width: 400,
      borderRadius: 12,
      padding: 40,
      gap: 16,
      paddingTop: 0,
      height: 700,
    },
    image: {
      height: 250,
      width: 400,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    list: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 },
    tags: {
      fontFamily: "Orbitron-Medium",
      color: theme.text,
      fontSize: 18,
      borderWidth: 1,
      borderColor: theme.text,
      borderRadius: 10,
      padding: 10,
    },
    title: { fontFamily: "Epilogue-Bold", color: theme.text, fontSize: 24 },
    description: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <FlatList
          data={tags}
          renderItem={({ item }) => <Text style={styles.tags}>{item}</Text>}
          keyExtractor={(item) => item}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        ></FlatList>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default ProjectCard;
