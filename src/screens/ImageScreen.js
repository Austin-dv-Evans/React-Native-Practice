import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../Components/ImageDetail'


const ImageScreen = () => {

    return (
        <View>
            <ImageDetail 
            title="Forest"
            imageScore="Image Score - 9" 
            imageSource={require('../../assets/forest.jpg')}
            />
            <ImageDetail 
            title="Beach"
            imageScore="Image Score - 7" 
            lol="prop3"  
            imageSource={require('../../assets/beach.jpg')}
            />
            <ImageDetail 
            title="Mountain"
            imageScore="Image Score - 6" 
            lol="prop4"  
            imageSource={require('../../assets/mountain.jpg')}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default ImageScreen