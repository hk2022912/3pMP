import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = () => (
    <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.line} />
    </View>
);

const styles = StyleSheet.create({
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    dividerText: {
        marginHorizontal: 8,
        color: '#666',
    },
});

export default Divider;
