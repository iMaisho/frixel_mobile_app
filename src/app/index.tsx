import { ScrollView, View } from "react-native";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Providers } from "../contexts/Providers";


export default function Index() {
  return (
  <Providers>
    <Header></Header>

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Body></Body>
        <Footer></Footer>
      </View>
    </ScrollView>
  </Providers>
  );
}
