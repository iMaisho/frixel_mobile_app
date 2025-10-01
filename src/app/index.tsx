import { View } from "react-native";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Providers } from "../contexts/Providers";


export default function Index() {
  return (
    <Providers>
    <View>
        <Header></Header>
        <Body></Body>
      <Footer></Footer>
      </View>
      </Providers>
  );
}
