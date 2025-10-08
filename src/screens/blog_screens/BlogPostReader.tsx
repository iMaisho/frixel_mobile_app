import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as Brightness from "expo-brightness";
import React, { useCallback, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";
import ToggleTheme from "../../components/blog_components/ToggleTheme";
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
  BlogPostReader: {
    title: string;
    content: string;
    author: string;
    date: string;
  };
};

type BlogPostReaderRouteProp = RouteProp<RootStackParamList, "BlogPostReader">;

const BlogPostReader = () => {
  const route = useRoute<BlogPostReaderRouteProp>();
  const { title, content, author, date } = route.params;
  const { theme, setTheme } = useTheme();
  const isLight = theme.name === "light";
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const adjustBrightness = async () => {
        const { status } = await Brightness.requestPermissionsAsync();
        if (status === "granted") {
          const original = await Brightness.getBrightnessAsync();
          await Brightness.setBrightnessAsync(0.3); // réduit la luminosité à 30%

          // Restore brightness on exit
          return () => {
            Brightness.setBrightnessAsync(original);
          };
        }
      };

      let restore: (() => void) | undefined;
      adjustBrightness().then((cleanup) => (restore = cleanup));

      return () => {
        if (restore) restore();
      };
    }, []),
  );

  useLayoutEffect(() => {
    // cacher la tab bar
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });

    // la réafficher quand on quitte
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined, // remet le style par défaut
      });
    };
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      gap: 12,
      padding: 18,
      backgroundColor: isLight ? "#ffffffff" : "#1F1F1F",
    },
    list: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 },
    title: {
      fontFamily: "Epilogue-Bold",
      color: isLight ? "#1F1F1F" : "#FFFFFF",
      fontSize: 40,
    },
    content: {
      fontFamily: "Epilogue-Regular",
      fontSize: 14,
      opacity: 0.8,
    },
    author: {
      fontFamily: "Epilogue-Regular",
      fontSize: 14,
      opacity: 0.6,
    },
    date: {
      fontFamily: "Epilogue-Regular",
      fontSize: 12,
      opacity: 0.6,
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <ToggleTheme></ToggleTheme>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>
          {author} — {date}
        </Text>

        <Markdown
          style={{
            blockquote: {
              backgroundColor: isLight ? "#FFFFFF" : "#1F1F1F",
              borderLeftWidth: 4,
              borderLeftColor: theme.primary,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginVertical: 8,
            },
            text: { color: isLight ? "#1F1F1F" : "#FFFFFF", fontSize: 20 },
          }}
        >
          {content}
        </Markdown>
      </ScrollView>
    </View>
  );
};

export default BlogPostReader;
