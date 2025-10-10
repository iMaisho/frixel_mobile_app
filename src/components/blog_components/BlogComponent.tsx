import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, StyleSheet, View } from "react-native";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import ToggleTheme from "./ToggleTheme";

function BlogComponent() {
  const { theme, setTheme } = useTheme();

  const DATA = BlogData;

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: theme.background,
    },
  });

  return (
    <View style={styles.container}>
      <ToggleTheme></ToggleTheme>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <BlogCard
            image={item.image}
            tags={item.tags}
            title={item.title}
            author={item.author}
            date={item.date}
            content={item.content}
          />
        )}
      />
    </View>
  );
}

export default BlogComponent;
