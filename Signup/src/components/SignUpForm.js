// src/components/SignUpForm.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LogoImage from './LogoImage';
import InputField from './InputField';
import PasswordField from './PasswordField';
import CheckboxField from './CheckboxField';
import RegisterButton from './RegisterButton';
import BackToLoginButton from './BackToLoginButton';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handleRegister = () => {
    console.log('User registered:', { username, password, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <LogoImage />
        <InputField placeholder="Username" value={username} onChangeText={setUsername} />
        <PasswordField placeholder="Password" value={password} onChangeText={setPassword} />
        <PasswordField placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} />
        <InputField placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <CheckboxField checked={checked} onToggle={() => setChecked(!checked)} />
        <RegisterButton onPress={handleRegister} />
        <BackToLoginButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
});

export default SignUpForm;
