import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import {
  isEmailValid,
  isPasswordValid,
  doPasswordsMatch,
  isDateValid,
} from './src/utils/validation'; // Yolunu doğru ayarladığından emin ol

export default function CreateAccountScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !dob || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert('Error', 'Invalid email address');
      return;
    }

    if (!isDateValid(dob)) {
      Alert.alert('Error', 'Invalid date format. Use dd/mm/yyyy');
      return;
    }

    if (!isPasswordValid(password)) {
      Alert.alert('Error', 'Password must be:\nAt least 6 characters\nAt least one capital letter\nAt least one number\nAt least one punctuation mark');
      return;
    }

    if (!doPasswordsMatch(password, confirmPassword)) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // ✅ Başarılı input
    Alert.alert('Success', 'Account created successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Date of Birth (dd/mm/yyyy)" value={dob} onChangeText={setDob} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <Button title="SUBMIT" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
});
