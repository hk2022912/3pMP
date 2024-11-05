import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, ...props }) => (
    <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} placeholder={placeholder} {...props} />
    </View>
);

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        color: '#666',
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
});

export default InputField;
