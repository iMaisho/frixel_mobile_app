import QuotationForm from "@/src/components/quotation_components/QuotationForm";
import { KeyboardAvoidingView, Platform, View } from "react-native";
function QuotationScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
    >
      <View>
        <QuotationForm></QuotationForm>
      </View>
    </KeyboardAvoidingView>
  );
}

export default QuotationScreen;
