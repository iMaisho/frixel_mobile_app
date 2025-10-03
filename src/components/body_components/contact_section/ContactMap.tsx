import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function ContactMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 48.83264957666373,
          longitude: 2.3724698031745306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

        <Marker
          coordinate={{
            latitude: 48.83264957666373,
            longitude: 2.3724698031745306,
          }}
          title="Frixel"
          description="5 parvis Alan Turing"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: 400,
    height: 300,
  },
});
