import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>RN Demo App</Text>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Components")}>
                <Text>Go to components</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("List")}>
                <Text>Go to list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Image")}>
                <Text>Go to image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Counter")}>
                <Text>Go to Counter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Color")}>
                <Text>Go to Color</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Square")}>
                <Text>Go to Square</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Text")}>
                <Text>Go to Text Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    link: {
        marginVertical: 20,
    }
});

export default HomeScreen;
