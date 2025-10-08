import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import BlogComponent from "../components/blog_components/BlogComponent";
import BlogPost from "../components/blog_components/BlogPost";
import BlogPostReader from "../components/blog_components/BlogPostReader";
import { useTheme } from "../contexts/ThemeContext";

const Stack = createStackNavigator(); // <- hors du composant

function BlogScreen() {
  const { theme } = useTheme();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
    >
      <View style={{ flex: 1, backgroundColor: theme.background }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BlogComponent" component={BlogComponent} />
          <Stack.Screen name="BlogPost" component={BlogPost} />
          <Stack.Screen name="BlogPostReader" component={BlogPostReader} />
        </Stack.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
}

export default BlogScreen;
