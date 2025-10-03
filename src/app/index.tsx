import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Providers } from "../contexts/Providers";

export default function Index() {
  return (
    <Providers>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
      >
        <Header></Header>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Body></Body>
            <Footer></Footer>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Providers>
  );
}
