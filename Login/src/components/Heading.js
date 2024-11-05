import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
    <View>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subheading}>Enter your information to Login</Text>
    </View>
);

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    subheading: {
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Heading;
