import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, StyleSheet, View } from "react-native";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import ToggleTheme from "./ToggleTheme";

function BlogComponent() {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    Component: {
      backgroundColor: theme.itemBackground,
      display: "flex",
      flexDirection: "column",
      margin: 30,
      marginBottom: 0,
      width: 400,
      borderRadius: 12,
      padding: 40,
      gap: 8,
      paddingTop: 0,
    },
    image: {
      height: 250,
      width: 400,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginLeft: -40,
    },
    list: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 },
    tags: {
      fontFamily: "Orbitron-Medium",
      color: theme.background,
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme.background,
      borderRadius: 10,
      padding: 8,
      margin: 4,
      backgroundColor: theme.text,
    },
    title: { fontFamily: "Epilogue-Bold", color: theme.text, fontSize: 24 },
    content: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 14,
      opacity: 0.8,
    },
    author: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 14,
      opacity: 0.6,
    },
    date: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 12,
      opacity: 0.6,
    },
  });

  const DATA = BlogData;

  return (
    <View>
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
