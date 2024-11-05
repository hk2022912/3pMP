import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import Heading from './Heading';
import InputField from './InputField';
import PasswordField from './PasswordField';
import CheckboxField from './CheckboxField';
import Button from './Button';
import Divider from './Divider';

const LoginForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Logo />
                <Heading />
                <View style={styles.form}>
                    <InputField label="Email" placeholder="Enter your Email" keyboardType="email-address" autoCapitalize="none" />
                    <PasswordField
                        placeholder="Enter Password"
                        isPasswordVisible={isPasswordVisible}
                        setIsPasswordVisible={setIsPasswordVisible}
                    />
                    <CheckboxField isChecked={isChecked} setIsChecked={setIsChecked} />
                    <Button title="Login" type="primary" />
                </View>
                <Divider />
                <Button title="Sign in with Google" type="secondary" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: '90%',
        maxWidth: 400,
    },
    form: {
        marginBottom: 20,
    },
});

export default LoginForm;
