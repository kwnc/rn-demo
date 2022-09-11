import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>RN Demo App</Text>
            <Button style={styles.link} title="Go to components" onPress={() => navigation.navigate("Components")}/>
            <Button style={styles.link} title="Go to list" onPress={() => navigation.navigate("List")}/>
            <Button style={styles.link} title="Go to image" onPress={() => navigation.navigate("Image")}/>
            <Button style={styles.link} title="Go to Counter" onPress={() => navigation.navigate("Counter")}/>
            <Button style={styles.link} title="Go to Color" onPress={() => navigation.navigate("Color")}/>
            <Button style={styles.link} title="Go to Square" onPress={() => navigation.navigate("Square")}/>
            <Button style={styles.link} title="Go to Text" onPress={() => navigation.navigate("Text")}/>
            <Button style={styles.link} title="Go to Box" onPress={() => navigation.navigate("Box")}/>
            <Button style={styles.link} title="Go to Mobx" onPress={() => navigation.navigate("Mobx")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    link: {
        marginBottom: 50,
        marginVertical: 30,
    }
});

export default HomeScreen;
