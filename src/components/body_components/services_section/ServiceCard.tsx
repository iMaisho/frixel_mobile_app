import { useTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface ServiceCardProps {
  iconName: any;
  price: string;
  title: string;
  subtitle: string;
  pinpoints: string[];
  catchphrase: string;
}

function ServiceCard({
  iconName,
  price,
  title,
  subtitle,
  pinpoints,
  catchphrase,
}: ServiceCardProps) {
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
      width: 300,
      borderRadius: 12,
      padding: 40,
      gap: 16,
    },
    price: {
      fontFamily: "Epilogue-Regular",
      color: theme.secondary,
      fontSize: 18,
      borderWidth: 1,
      borderColor: theme.secondary,
      borderRadius: 10,
      padding: 5,
    },
    title: { fontFamily: "Orbitron-Bold", color: theme.text, fontSize: 20 },
    subtitle: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 16,
    },
    pinpoints: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 14,
    },
    catchphrase: {
      fontFamily: "Epilogue-Bold",
      color: theme.text,
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name={iconName} size={48} color={theme.text} />
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <FlatList
          data={pinpoints}
          renderItem={({ item }) => (
            <Text style={styles.pinpoints}>✅ {item}</Text>
          )}
          keyExtractor={(item) => item}
        ></FlatList>
        <Text style={styles.catchphrase}>{catchphrase}</Text>
      </View>
    </View>
  );
}

export default ServiceCard;
