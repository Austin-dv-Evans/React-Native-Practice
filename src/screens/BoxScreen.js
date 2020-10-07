import React from 'react';
import { Text, View, StyleSheet } from 'react-native'


const BoxScreen = () => {

    return (
        <View style={styles.parentStyle}>
            <View style={styles.view1Style}></View>
            <View style={styles.view2Style}></View>
            <View style={styles.view3Style}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black', 
        height: 200,
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view1Style: {
        // borderWidth: 3,
        // borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'red'
        // alignSelf: 'center',
        // right: 50
        // flex: 3
    },
    view2Style: {
        // borderWidth: 3,
        // borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
        // alignSelf: "flex-end"
        // marginTop: 50
        // alignSelf: 'flex-end',
        // position: 'absolute',
        // flex: 3
        // ...StyleSheet.absoluteFillObject

    },
    view3Style: {
        // borderWidth: 3,
        // borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'purple'
        // position: 'absolute',
        // top: 45
        // flex: 4
    },
})

export default BoxScreen