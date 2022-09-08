import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Autolly</Text>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Components")}>
                <Text>Go to components</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("List")}>
                <Text>Go to list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Image")}>
                <Text>Go to image</Text>
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
