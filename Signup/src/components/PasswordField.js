// src/components/PasswordField.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordField = ({ placeholder, value, onChangeText }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.passwordInput}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={!visible}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Icon name={visible ? 'eye-off' : 'eye'} size={24} color="#aaa" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: '#333333',
  },
});

export default PasswordField;
