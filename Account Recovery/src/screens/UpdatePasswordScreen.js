// src/screens/UpdatePasswordScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import WarningMessage from '../components/WarningMessage';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/SubmitButton';

const UpdatePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.card}>
        <WarningMessage />
        <PasswordInput
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <PasswordInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <SubmitButton onPress={() => console.log('Submit pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
});

export default UpdatePasswordScreen;
