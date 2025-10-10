import { useTheme } from "@/src/contexts/ThemeContext";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const ContactForm = () => {
  const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.itemBackground,
      padding: 20,
      marginBottom: 0,
      gap: 10,
      height: 1000,
      paddingTop: 70,
    },
    title: {
      fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.text,
      textAlign: "center",
      paddingBottom: 20,
    },
    field: {
      marginBottom: 15,
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.primary,
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      color: theme.text,
      borderColor: theme.text,
    },
    messageInput: {
      height: 200,
      borderWidth: 1,
      padding: 10,
      color: theme.text,
      borderColor: theme.text,
      textAlignVertical: "top",
    },
    error: {
      color: theme.secondary,
    },
    button: {
      backgroundColor: theme.primary,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Orbitron",
    },
    buttonText: {
      color: theme.itemBackground,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
  });

  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  const [company, onChangeCompany] = React.useState("");
  const [error, setError] = React.useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setError("");
    // envoyer le formulaire
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Nous contacter</Text>
          <View style={styles.field}>
            <Text style={styles.label}>Nom Prénom *</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              placeholder="Nom Prénom (requis)"
              placeholderTextColor="#999"
              value={name}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              placeholder="Votre Email (requis)"
              placeholderTextColor="#999"
              value={email}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Message *</Text>
            <TextInput
              editable
              multiline
              numberOfLines={200}
              maxLength={10000}
              onChangeText={onChangeMessage}
              value={message}
              style={styles.messageInput}
              placeholder="Votre message (requis)"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Société </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeCompany}
              value={company}
              placeholder="Votre société (optionnel)"
              placeholderTextColor="#999"
            />
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ContactForm;

// TODO: Remplacer le formulaire par ce nouveau squelette
// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Alert,
//   Animated,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View
// } from 'react-native';

// const { width } = Dimensions.get('window');

// const QuotationForm = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const slideAnim = useRef(new Animated.Value(0)).current;

//   const slides = [
//     {
//       id: 'name',
//       title: 'Comment vous appelez-vous ?',
//       placeholder: 'Votre nom complet',
//       field: 'name'
//     },
//     {
//       id: 'email',
//       title: 'Quelle est votre adresse email ?',
//       placeholder: 'exemple@email.com',
//       field: 'email',
//       keyboardType: 'email-address'
//     },
//     {
//       id: 'phone',
//       title: 'Votre numéro de téléphone ?',
//       placeholder: '+33 6 12 34 56 78',
//       field: 'phone',
//       keyboardType: 'phone-pad'
//     },
//     {
//       id: 'message',
//       title: 'Un message à nous laisser ?',
//       placeholder: 'Votre message ici...',
//       field: 'message',
//       multiline: true
//     }
//   ];

//   const styles = StyleSheet.create({

//   })

//   useEffect(() => {
//     Animated.spring(slideAnim, {
//       toValue: currentSlide,
//       useNativeDriver: true,
//       tension: 65,
//       friction: 10
//     }).start();
//   }, [currentSlide]);

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const goToNext = () => {
//     if (currentSlide < slides.length - 1) {
//       setCurrentSlide(prev => prev + 1);
//     }
//   };

//   const goToPrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(prev => prev - 1);
//     }
//   };

//   const handleSubmit = () => {
//     Alert.alert(
//       'Formulaire soumis',
//       JSON.stringify(formData, null, 2),
//       [{ text: 'OK' }]
//     );
//     console.log('Formulaire soumis:', formData);
//   };

//   const isCurrentFieldFilled = () => {
//     const currentField = slides[currentSlide].field;
//     return formData[currentField].trim() !== '';
//   };

//   const ProgressBar = () => (
//     <View style={styles.progressContainer}>
//       <View style={styles.progressBars}>
//         {slides.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.progressBar,
//               index <= currentSlide ? styles.progressBarActive : styles.progressBarInactive
//             ]}
//           />
//         ))}
//       </View>
//       <Text style={styles.progressText}>
//         Étape {currentSlide + 1} sur {slides.length}
//       </Text>
//     </View>
//   );

//   const ChevronLeft = () => (
//     <Text style={styles.iconText}>←</Text>
//   );

//   const ChevronRight = () => (
//     <Text style={styles.iconText}>→</Text>
//   );

//   const CheckIcon = () => (
//     <Text style={styles.iconText}>✓</Text>
//   );

//   const renderSlide = (slide, index) => {
//     const translateX = slideAnim.interpolate({
//       inputRange: [index - 1, index, index + 1],
//       outputRange: [width, 0, -width],
//       extrapolate: 'clamp'
//     });

//     const opacity = slideAnim.interpolate({
//       inputRange: [index - 1, index, index + 1],
//       outputRange: [0, 1, 0],
//       extrapolate: 'clamp'
//     });

//     return (
//       <Animated.View
//         key={slide.id}
//         style={[
//           styles.slideContainer,
//           {
//             transform: [{ translateX }],
//             opacity
//           }
//         ]}
//       >
//         <Text style={styles.slideTitle}>{slide.title}</Text>

//         <TextInput
//           value={formData[slide.field]}
//           onChangeText={(value) => handleInputChange(slide.field, value)}
//           placeholder={slide.placeholder}
//           style={[
//             styles.input,
//             slide.multiline && styles.inputMultiline
//           ]}
//           multiline={slide.multiline}
//           numberOfLines={slide.multiline ? 6 : 1}
//           keyboardType={slide.keyboardType || 'default'}
//           autoCapitalize="none"
//           placeholderTextColor="#9ca3af"
//         />
//       </Animated.View>
//     );
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <View style={styles.content}>
//         <ProgressBar />

//         <View style={styles.card}>
//           <View style={styles.slidesWrapper}>
//             {slides.map((slide, index) => renderSlide(slide, index))}
//           </View>

//           <View style={styles.navigation}>
//             <TouchableOpacity
//               onPress={goToPrevious}
//               disabled={currentSlide === 0}
//               style={[
//                 styles.button,
//                 styles.buttonPrevious,
//                 currentSlide === 0 && styles.buttonDisabled
//               ]}
//             >
//               <ChevronLeft />
//               <Text style={[
//                 styles.buttonText,
//                 styles.buttonTextPrevious,
//                 currentSlide === 0 && styles.buttonTextDisabled
//               ]}>
//                 Précédent
//               </Text>
//             </TouchableOpacity>

//             {currentSlide === slides.length - 1 ? (
//               <TouchableOpacity
//                 onPress={handleSubmit}
//                 disabled={!isCurrentFieldFilled()}
//                 style={[
//                   styles.button,
//                   styles.buttonSubmit,
//                   !isCurrentFieldFilled() && styles.buttonDisabled
//                 ]}
//               >
//                 <CheckIcon />
//                 <Text style={[
//                   styles.buttonText,
//                   styles.buttonTextPrimary,
//                   !isCurrentFieldFilled() && styles.buttonTextDisabled
//                 ]}>
//                   Envoyer
//                 </Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 onPress={goToNext}
//                 disabled={!isCurrentFieldFilled()}
//                 style={[
//                   styles.button,
//                   styles.buttonNext,
//                   !isCurrentFieldFilled() && styles.buttonDisabled
//                 ]}
//               >
//                 <Text style={[
//                   styles.buttonText,
//                   styles.buttonTextPrimary,
//                   !isCurrentFieldFilled() && styles.buttonTextDisabled
//                 ]}>
//                   Suivant
//                 </Text>
//                 <ChevronRight />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>

//         <Text style={styles.hint}>
//           Remplissez le champ pour continuer
//         </Text>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default QuotationForm;
