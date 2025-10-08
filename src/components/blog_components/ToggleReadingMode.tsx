import { useTheme } from "@/src/contexts/ThemeContext";
import themeLight from "@/src/themes/ThemeLight";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type RootStackParamList = {
  BlogPostReader: {
    title: string;
    content: string;
    author: string;
    date: string;
    initialReading?: boolean;
  };
};

type NavProp = StackNavigationProp<RootStackParamList, "BlogPostReader">;

type Props = { title: string; content: string; author: string; date: string };

const ToggleReadingMode: React.FC<Props> = ({
  title,
  content,
  author,
  date,
}) => {
  const navigation = useNavigation<NavProp>();
  const { theme, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primary,
      borderRadius: 50,
      position: "absolute",
      zIndex: 999,
      right: 30,
      top: 90,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("BlogPostReader", {
          title,
          content,
          author,
          date,
        })
      }
    >
      <Ionicons
        name="book"
        size={30}
        color={theme === themeLight ? "#00000083" : "#fffb008a"}
      />
    </TouchableOpacity>
  );
};

export default ToggleReadingMode;
