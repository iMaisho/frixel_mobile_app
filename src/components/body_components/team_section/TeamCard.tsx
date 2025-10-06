import { useTheme } from "@/src/contexts/ThemeContext";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface TeamCardProps {
  picture: any;
  name: string;
  job: string;
  description: string;
}

function TeamCard({ picture, name, job, description }: TeamCardProps) {
  const { theme, setTheme } = useTheme();
  const [visible, setVisible] = useState(false);

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
    modal: { backgroundColor: theme.background, padding: 20, borderRadius: 10 },
    descriptionBox: {
      width: 400,
      marginTop: 20,
      backgroundColor: theme.itemBackground,
      padding: 50,
    },
    descriptionText: {
      fontFamily: "UbuntuMono-Regular",
      fontSize: 16,
      color: theme.text,
    },
  });

  return (
    <Pressable onPress={() => setVisible(true)}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={picture} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.job}>{job}</Text>
      </View>
      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modal}>
            <View style={styles.container}>
              <View style={styles.card}>
                <Image source={picture} style={styles.image} />
                <Text style={styles.name}>{name}</Text>
              </View>
              <Text style={styles.job}>{job}</Text>
              <View style={styles.descriptionBox}>
                <Text style={styles.descriptionText}>{description}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </Pressable>
  );
}

export default TeamCard;
