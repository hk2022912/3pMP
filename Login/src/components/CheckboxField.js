import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckboxField = ({ isChecked, setIsChecked }) => (
    <View style={styles.checkboxContainer}>
        <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={() => setIsChecked(!isChecked)} color="#1e90ff" />
        <Text style={styles.label}>Remember me</Text>
        <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    forgotPassword: {
        marginLeft: 'auto',
    },
    forgotPasswordText: {
        color: '#1e90ff',
    },
    label: {
        color: '#666',
    },
});

export default CheckboxField;
