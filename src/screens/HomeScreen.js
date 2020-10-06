import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";


const HomeScreen = ({ navigation }) => {
  
  return (
  <View>
    <Text style={styles.text}>Austin's First React Native App</Text>
    <Button 
      title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')} />
    <Button
      title="Go to Lists Demo"
      onPress={() => navigation.navigate('List')} />
    <Button
      title="Go to Image Screen Demo"
      onPress={() => navigation.navigate('Image')} />
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text style={styles.listButton}>Go to List Demo</Text>   
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    padding: 20
  },
  listButton: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    borderColor: "rgb(0, 0, 75)",
    borderWidth: 10,
    paddingTop: 30

  }
});

export default HomeScreen;


