import { KeyboardAvoidingView, Platform, View } from "react-native";
import ContactForm from "../../components/body_components/contact_section/ContactForm";

function ContactScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
    >
      <View>
        <ContactForm></ContactForm>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ContactScreen;
