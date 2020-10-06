import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Renee', age: 'Age - 30' },
        { name: 'Luna', age: 'Age - .08' },
        { name: 'Austin', age: 'Age - 29' },
        { name: 'Jerry', age: 'Age - 5.5' },
        { name: 'Penguins', age: 'Age - 10' },
        { name: 'Penguins1', age: 'Age - 10' },
        { name: 'Penguins2', age: 'Age - 10' },
        { name: 'Penguins3', age: 'Age - 10' },
    ]


    return (
    <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}, {item.age}</Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 30
    }
})

export default ListScreen;