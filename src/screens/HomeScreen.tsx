import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomeScreen() {
  return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
      ><Header></Header>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Body></Body>
            <Footer></Footer>
          </View>
        </ScrollView></KeyboardAvoidingView>); }



export default HomeScreen;
