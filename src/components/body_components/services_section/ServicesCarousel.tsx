import { useTheme } from "@/src/contexts/ThemeContext";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import ServiceCard from "./ServiceCard";
import ServicesData from "./ServicesData";

function ServicesCarousel() {
  interface ServiceCardProps {
    icon: string;
    price: string;
    title: string;
    subtitle: string;
    pinpoints: string[];
    catchphrase: string;
  }

  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: 30,
      alignItems: "center",
    },
  });

  const DATA = ServicesData;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ServiceCard
            iconName={item.iconName}
            price={item.price}
            title={item.title}
            subtitle={item.subtitle}
            pinpoints={item.pinpoints}
            catchphrase={item.catchphrase}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </ScrollView>
  );
}

export default ServicesCarousel;
