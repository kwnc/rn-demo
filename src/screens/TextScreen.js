import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => {setName(newValue)}}
            />
            {(name.length < 6 ? <Text>Your password should be longer than 6</Text> : null)}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TextScreen;