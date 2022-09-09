import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";

const BoxScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        height: 200,
        borderColor: 'black',
        justifyContent: 'space-around',
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default BoxScreen;
