import React from 'react';
import {StyleSheet, View, TextInput} from "react-native";

const InputBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginVertical: 10,
        flexDirection: "row",
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: "center",
        marginHorizontal: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
});

export default InputBar;
