import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, currentCount: state.currentCount + action.payload};
        case 'decrement':
            return {...state, currentCount: state.currentCount - action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {currentCount: 0});

    return (
        <View>
            <Text>Current count: {state.currentCount}</Text>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'increment', payload: 1});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'decrement', payload: 1});
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;