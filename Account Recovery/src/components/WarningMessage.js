// src/components/WarningMessage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WarningMessage = () => {
  return (
    <View style={styles.warningContainer}>
      <Text style={styles.warningText}>You need to change your password.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  warningContainer: {
    backgroundColor: '#fffbe6',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffe58f',
    marginBottom: 15,
  },
  warningText: {
    color: '#d48806',
    fontSize: 14,
  },
});

export default WarningMessage;
