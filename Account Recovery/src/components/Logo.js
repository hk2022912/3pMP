// src/components/Logo.js
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
      <Text style={styles.logoText}>Forgot Password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logoImage: {
    width: 150,
    height: 120,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Logo;
