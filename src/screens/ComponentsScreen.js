import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = <Text>Hello to you!</Text>;
    const firstName = 'Austin'
    return (
    <View>
        <Text style={styles.textStyle}>Getting Started with React Native</Text>
        <Text style={styles.nameStyle}>My name is {firstName} </Text>
        
        {greeting}
    </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    nameStyle: {
        fontSize: 50
    }
});


export default ComponentsScreen;