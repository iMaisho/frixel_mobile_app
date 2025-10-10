import { useTheme } from "@/src/contexts/ThemeContext";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import ProgressBar from "./ProgressBar";
import QuotationFormData from "./QuotationFormData";

const { width } = Dimensions.get("window");

const QuotationForm = () => {
  const { theme, setTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
    platform: [],
    hardware: [],
    design: "",
    login: "",
    "login-type": "",
    geolocation: "",
    medias: "",
    chat: "",
    payment: "",
    notifications: "",
    ads: "",
    analytics: "",
    API: "",
    backoffice: "",
  });

  const slideAnim = useRef(new Animated.Value(0)).current;

  const slides = QuotationFormData;

  const styles = StyleSheet.create({
    background: {
      backgroundColor: theme.itemBackground,
    },
    titleBox: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
      paddingTop: 50,
    },
    title: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      padding: 20,
      textAlign: "center",
      color: theme.primary,
    },
    slideContainer: {
      height: 600,
      alignItems: "center"

    },
    slideTitle: {

  },
    slideBox: {
      backgroundColor: theme.background,
      height: 500,
      width: 400,
      padding:30,
      position: "absolute",
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
    },
    button: {
      padding: 15,
      backgroundColor: theme.primary,
      width: 130,
      alignItems: "center",
    },
    buttonText: {
      color: theme.background,
    },
    buttonDisabled: {
      opacity: 0.4,
    },
    hint: {
      textAlign: "center",
      fontSize: 14,
      color: "#6b7280",
      marginTop: 16,
    },
  });

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: currentSlide,
      useNativeDriver: true,
      tension: 65,
      friction: 10,
    }).start();
  }, [currentSlide]);

  const handleInputChange = (field: string, value:any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    Alert.alert("Formulaire soumis", JSON.stringify(formData, null, 2), [
      { text: "OK" },
    ]);
    console.log("Formulaire soumis:", formData);
  };

  const isCurrentFieldFilled = () => {
    const currentSlideData = slides[currentSlide];
    const value = formData[currentSlideData.field];

    switch (currentSlideData.type) {
      case 'text':
        return typeof value === 'string' && value.trim() !== '';
      case 'checkbox':
        return Array.isArray(value) && value.length > 0;
      case 'radio':
        return typeof value === 'string' && value !== '';
      case 'boolean':
        return value === 'Oui' || value === 'Non';
      default:
        return false;
    }
  };

const renderSlide = (slide:any, index:number) => {
  const translateX = slideAnim.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, -width],
    extrapolate: "clamp",
  });

  const opacity = slideAnim.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 0],
    extrapolate: "clamp",
  });

  switch (slide.type) {
    case "text":
      return (
        <Animated.View
          key={slide.id ?? String(index)}
          style={[
            styles.slideBox,
            {
              transform: [{ translateX }],
              opacity,
            },
          ]}
        >
          <Text style={styles.slideTitle}>{slide.title}</Text>

          <TextInput
            value={formData[slide.field] ?? ""}
            onChangeText={(value) => handleInputChange(slide.field, value)}
            placeholder={slide.placeholder}
            style={[styles.input, slide.multiline && styles.inputMultiline]}
            multiline={!!slide.multiline}
            numberOfLines={slide.multiline ? 6 : 1}
            keyboardType={slide.keyboardType || "default"}
            autoCapitalize="none"
            placeholderTextColor="#9ca3af"
          />
        </Animated.View>
      );

    case "radio":
      return (
        <Animated.View
          key={slide.id ?? String(index)}
          style={[
            styles.slideBox,
            {
              transform: [{ translateX }],
              opacity,
            },
          ]}
        >
          <Text style={styles.slideTitle}>{slide.title}</Text>
          <Text style={styles.hint}>Une seule réponse possible</Text>
          <View style={{ gap: 12, marginTop: 20 }}>
            {slide.options.map((option, optIndex) => (
              <TouchableOpacity
                key={optIndex}
                onPress={() => handleInputChange(slide.field, option)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 16,
                  borderWidth: 2,
                  borderColor: formData[slide.field] === option ? theme.primary : "#e5e7eb",
                  borderRadius: 8,
                  backgroundColor: formData[slide.field] === option ? theme.primary + "20" : "transparent",
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: formData[slide.field] === option ? theme.primary : "#9ca3af",
                    marginRight: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {formData[slide.field] === option && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: theme.primary,
                      }}
                    />
                  )}
                </View>
                <Text style={{ fontSize: 16, color: theme.text }}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      );

    case "checkbox":
      return (
        <Animated.View
          key={slide.id ?? String(index)}
          style={[
            styles.slideBox,
            {
              transform: [{ translateX }],
              opacity,
            },
          ]}
        >
          <Text style={styles.slideTitle}>{slide.title}</Text>
          <Text style={styles.hint}>Une ou plusieurs réponses possibles</Text>
          <View style={{ gap: 12, marginTop: 20 }}>
            {slide.options.map((option, optIndex) => {
              const selectedOptions = formData[slide.field] || [];
              const isSelected = selectedOptions.includes(option);

              return (
                <TouchableOpacity
                  key={optIndex}
                  onPress={() => {
                    const currentValues = formData[slide.field] || [];
                    const newValues = isSelected
                      ? currentValues.filter((v) => v !== option)
                      : [...currentValues, option];
                    handleInputChange(slide.field, newValues);
                  }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 16,
                    borderWidth: 2,
                    borderColor: isSelected ? theme.primary : "#e5e7eb",
                    borderRadius: 8,
                    backgroundColor: isSelected ? theme.primary + "20" : "transparent",
                  }}
                >
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      borderWidth: 2,
                      borderColor: isSelected ? theme.primary : "#9ca3af",
                      marginRight: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isSelected ? theme.primary : "transparent",
                    }}
                  >
                    {isSelected && (
                      <Text style={{ color: theme.background, fontSize: 12, fontWeight: "bold" }}>
                        ✓
                      </Text>
                    )}
                  </View>
                  <Text style={{ fontSize: 16, color: theme.text }}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.View>
      );

    case "boolean":
      return (
        <Animated.View
          key={slide.id ?? String(index)}
          style={[
            styles.slideBox,
            {
              transform: [{ translateX }],
              opacity,
            },
          ]}
        >
          <Text style={styles.slideTitle}>{slide.title}</Text>
          <View style={{ flexDirection: "row", gap: 12, marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => handleInputChange(slide.field, "Oui")}
              style={{
                flex: 1,
                padding: 20,
                borderWidth: 2,
                borderColor: formData[slide.field] === "Oui" ? theme.primary : "#e5e7eb",
                borderRadius: 8,
                alignItems: "center",
                backgroundColor: formData[slide.field] === "Oui" ? theme.primary + "20" : "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: formData[slide.field] === "Oui" ? theme.primary : theme.text,
                }}
              >
                Oui
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleInputChange(slide.field, "Non")}
              style={{
                flex: 1,
                padding: 20,
                borderWidth: 2,
                borderColor: formData[slide.field] === "Non" ? theme.primary : "#e5e7eb",
                borderRadius: 8,
                alignItems: "center",
                backgroundColor: formData[slide.field] === "Non" ? theme.primary + "20" : "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: formData[slide.field] === "Non" ? theme.primary : theme.text,
                }}
              >
                Non
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      );

    default:
      return null;
  }
};

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.titleBox}>
          <Text style={styles.title}>Simulez votre devis en 5 minutes</Text>
        </View>
        <View style={styles.background}>
          <ProgressBar slides={slides} currentSlide={currentSlide} />

          <View style={styles.slideContainer}>
            {slides.map((slide, index) => renderSlide(slide, index))}
          </View>

          <View style={styles.buttonBox}>
            <TouchableOpacity
              onPress={goToPrevious}
              disabled={currentSlide === 0}
              style={styles.button}
            >
              <Text style={styles.buttonText}>← Précédent</Text>
            </TouchableOpacity>

            {currentSlide === slides.length - 1 ? (
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isCurrentFieldFilled()}
                style={styles.button}
              >
                <Text style={styles.buttonText}>✓ Envoyer</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={goToNext}
                disabled={!isCurrentFieldFilled()}
                style={[
                  styles.button,
                  !isCurrentFieldFilled() && styles.buttonDisabled,
                ]}
              >
                <Text style={styles.buttonText}>Suivant →</Text>
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.hint}>Remplissez le champ pour continuer</Text>
        </View>
      </KeyboardAvoidingView>
    );
  };

export default QuotationForm;
