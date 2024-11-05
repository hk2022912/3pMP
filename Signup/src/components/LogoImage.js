// src/components/LogoImage.js
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

const LogoImage = () => (
  <View style={styles.container}>
    <Image source={require('../assets/Images/logo.png')} style={styles.logoImage} />
    <Text style={styles.logoText}>Create an Account</Text>
    <Text style={styles.headerText}>Register to Proceed the App</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 200,
    height: 150,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default LogoImage;

