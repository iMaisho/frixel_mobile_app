import { useTheme } from "@/src/contexts/ThemeContext";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import BlogComponent from "../../components/blog_components/BlogComponent";
import BlogPost from "../blog_screens/BlogPost";
import BlogPostReader from "../blog_screens/BlogPostReader";

const Stack = createStackNavigator();

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
