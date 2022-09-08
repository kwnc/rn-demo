import {StyleSheet, Text, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {key: '1', name: "Friend #1", age: 20},
        {key: '2', name: "Friend #2", age: 24},
        {key: '3', name: "Friend #3", age: 22},
        {key: '4', name: "Friend #4", age: 26},
        {key: '5', name: "Friend #5", age: 23},
        {key: '6', name: "Friend #6", age: 25},
        {key: '7', name: "Friend #7", age: 28},
        {key: '8', name: "Friend #8", age: 29},
        {key: '9', name: "Friend #9", age: 28},
    ]

    return (
        <FlatList keyExtractor={friend => friend.name} data={friends}
                  renderItem={({item}) => {
                      return <Text style={styles.text}>{item.name} - Age {item.age}</Text>;
                  }}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 20,
    }
})

export default ListScreen;