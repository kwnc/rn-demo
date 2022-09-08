import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9}/>
            <ImageDetail title="Mountains" imageSource={require('../../assets/mountain.jpg')} score={5}/>
            <ImageDetail title="Sea" imageSource={require('../../assets/beach.jpg')} score={7}/>
            <ImageDetail title="Lake" imageSource={require('../../assets/beach.jpg')} score={10}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;