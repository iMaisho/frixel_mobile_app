import { useTheme } from '@/src/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const ContactForm = () => {
    const { theme, setTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {  backgroundColor: theme.itemBackground, padding: 20, marginBottom:0, gap:10},
    title:{fontFamily: "Orbitron-Bold",
      fontSize: 30,
      color: theme.text,
      textAlign: "center",
      paddingBottom:20
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
      borderColor: theme.text
    },
    messageInput: {
      height:200,
    borderWidth: 1,
    padding: 10,
      color: theme.text,
      borderColor: theme.text,
      textAlignVertical: "top"
    },
    error: {
      color:theme.secondary
    },
    button: {
      backgroundColor: theme.primary,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      fontFamily:"Orbitron"
    },
    buttonText: {
    color: theme.itemBackground

    },
        row: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
  });


  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [message, onChangeMessage] = React.useState('');
  const [company, onChangeCompany] = React.useState('');
    const [error, setError] = React.useState('');


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
              placeholder='Nom Prénom (requis)'
              placeholderTextColor="#999"
          value={name}
            />
          </View>
                    <View style={styles.field}>
  <Text style={styles.label}>Email *</Text>
                <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
            placeholder='Votre Email (requis)'
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
            </View>          <View style={styles.field}>
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
