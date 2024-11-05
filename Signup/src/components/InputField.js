// src/components/InputField.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, value, onChangeText, keyboardType = 'default' }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#aaa"
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    color: '#333333',
    marginBottom: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 23,
  },
});

export default InputField;
