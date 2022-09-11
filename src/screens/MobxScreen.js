import React, {useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {observer} from "mobx-react";
import {todoStore} from "../store/TodosStore";
import InputBar from "../components/InputBar";

const MobxScreen = () => {
    const [newTodo, setNewTodo] = useState();

    return (
        <View>
            <Text>Mamy: {todoStore.totalTodos} zadań</Text>
            <InputBar term={newTodo} onTermChange={setNewTodo} onTermSubmit={() => todoStore.addTodo(newTodo)}/>
            <FlatList keyExtractor={todo => todo.id} data={todoStore.todos} renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}/>
        </View>
    );
}

export default observer(MobxScreen);
