import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TodoView = ({todo}) => {
    return (
        <View style={styles.view}>
            <BouncyCheckbox isChecked={todo.finished} onPress={() => todo.toggle()}/>
            <Text>{todo.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TodoView;
