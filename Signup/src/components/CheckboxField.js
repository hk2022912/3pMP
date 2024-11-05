// src/components/CheckboxField.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckboxField = ({ checked, onToggle }) => (
  <View style={styles.container}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={onToggle}
      color="#1e90ff"
    />
    <Text style={styles.label}>I agree to the Terms and Conditions</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  label: {
    color: '#333333',
    marginLeft: 8,
  },
});

export default CheckboxField;
