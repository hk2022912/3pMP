import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => (
    <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
    </View>
);

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 200,
        height: 150,
    },
});

export default Logo;
