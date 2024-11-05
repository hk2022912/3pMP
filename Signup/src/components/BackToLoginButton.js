// src/components/BackToLoginButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BackToLoginButton = () => (
  <TouchableOpacity>
    <Text style={styles.text}>« Back to Login</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    color: '#1e90ff',
  },
});

export default BackToLoginButton;
