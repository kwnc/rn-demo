import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>'Hi there!'</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This is the component screen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 60,
    }
});

export default ComponentsScreen;