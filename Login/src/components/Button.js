import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, type }) => (
    <TouchableOpacity style={[styles.button, type === 'primary' ? styles.primaryButton : styles.secondaryButton]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: '#1e90ff',
    },
    secondaryButton: {
        backgroundColor: '#aaa',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Button;
