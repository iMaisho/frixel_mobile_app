import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { useTheme } from "../../contexts/ThemeContext";

type RootStackParamList = {
  BlogList: undefined;
  BlogPost: {
    title: string;
    image: any;
    tags: string[];
    content: string;
    author: string;
    date: string;
  };
};

type BlogPostRouteProp = RouteProp<RootStackParamList, "BlogPost">;

const BlogPost = () => {
  const route = useRoute<BlogPostRouteProp>();
  const { title, image, tags, content, author, date } = route.params;
  const { theme, setTheme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      gap: 12,
      padding: 18,
      backgroundColor: theme.background,
    },

    image: {
      height: 250,
      width: 500,
      margin: -18,
      marginBottom: 18,
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

  return (
    <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>
          {author} — {date}
        </Text>

        <View>
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
        </View>

        <Markdown>{content}</Markdown>
      </ScrollView>
    </View>
  );
};

export default BlogPost;
