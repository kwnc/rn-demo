import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ImageScreen = (props) => {
    return (
        <View>
            <Image source={props.imageSource}/>
            <View style={styles.row}>
                <Text>{props.title}</Text>
                <Text> Score: {props.score}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    }
});

export default ImageScreen;