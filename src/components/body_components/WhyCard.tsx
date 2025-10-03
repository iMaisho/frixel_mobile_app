import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface WhyCardProps {
  iconName: any;
  title: string;
  description: string;
  price: string;
}

function WhyCard({ iconName, title, description, price }: WhyCardProps) {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 400,
      backgroundColor: theme.itemBackground,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 14,
      padding: 24,
      borderRadius:16
    },
    logo: {
      height: 150,
      width: 150,
      marginRight: 10,
      borderRadius: 20,
    },
    titleBlock: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      width: 400,
      paddingLeft: 24,

    },
    title: {
      fontFamily: "Orbitron-Bold",
      fontSize: 18,
      color: theme.text,
    },
    description: {
      fontFamily: "Epilogue-Regular",
      fontSize: 14,
      color: theme.text,
    },
    price: {
      fontFamily: "Epilogue-Bold",
      fontSize: 14,
      color: theme.text,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
<Ionicons name={iconName} size={24} color={theme.secondary} />        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

export default WhyCard;
