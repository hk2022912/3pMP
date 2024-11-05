import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordField = ({ isPasswordVisible, setIsPasswordVisible, ...props }) => (
    <View style={styles.passwordContainer}>
        <TextInput style={styles.input} secureTextEntry={!isPasswordVisible} {...props} />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeIcon}>
            <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#aaa" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});

export default PasswordField;
