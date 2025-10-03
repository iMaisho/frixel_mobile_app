import { useTheme } from "@/src/contexts/ThemeContext";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TeamCardProps {
  picture: string;
  name: string;
  job: string;
  description: string;
}

function TeamCard({ picture, name, job, description }: TeamCardProps) {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: theme.primary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 30,
      marginBottom: 0,
      height: 288,
      width: 288,
      borderRadius: 12,
    },
    image: {
      height: 200,
      width: 200,
      backgroundColor: "blue",
    },
    name: {
      fontFamily: "Orbitron-Bold",
      color: "white",
      fontSize: 16,
    },
    job: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* <Image source={picture} /> */}
          <View style={styles.image}></View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.job}>{job}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TeamCard;
