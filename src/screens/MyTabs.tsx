import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../contexts/ThemeContext";
import BlogScreen from "./BlogScreen";
import ContactScreen from "./ContactScreen";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { theme, setTheme } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={"Accueil"}
      screenOptions={{
        animation: "shift",
        headerStyle: {
          backgroundColor: theme.background,
          borderBottomColor: theme.secondary,
          borderBottomWidth: 1,
        },
        headerTintColor: theme.text,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.secondary,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: theme.text,
        },
        tabBarActiveTintColor: theme.secondary,
        tabBarInactiveTintColor: theme.primary,
      }}
    >
            <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
                    headerShown:false,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
