import { useTheme } from "@/src/contexts/ThemeContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  slides: any[];
  currentSlide: number;
};

const ProgressBar: React.FC<Props> = ({ slides, currentSlide }) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    progressContainer: {
      marginBottom: 32,
    },
    progressBars: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    progressBar: {
      height: 4,
      flex: 1,
      marginHorizontal: 4,
      borderRadius: 9999,
    },
    progressBarActive: {
      backgroundColor: theme.primary,
    },
    progressBarInactive: {
      backgroundColor: theme.primary,
      opacity: 0.2,
    },
    progressText: {
      fontSize: 14,
      color: theme.primary,
      textAlign: "center",
    },
  });

  // sécurité : éviter d'afficher un numéro hors-bornes
  const safeCurrent = Math.max(0, Math.min(currentSlide, slides.length - 1));

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressBars}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              index <= safeCurrent
                ? styles.progressBarActive
                : styles.progressBarInactive,
            ]}
          />
        ))}
      </View>

      <Text style={styles.progressText}>
        Étape {safeCurrent + 1} sur {slides.length}
      </Text>
    </View>
  );
};

export default ProgressBar;
