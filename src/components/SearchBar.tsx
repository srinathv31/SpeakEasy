// Source Imports
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


export default function SearchBar({ setQuery, query }: {
    setQuery: (q: string) => void, query: string
}): JSX.Element {
    return(
        <View style={styles.bar}>
            <TextInput
                style={styles.input}
                onChangeText={setQuery}
                value={query}
                placeholder="Search Recording"
                placeholderTextColor={"gray"}
                returnKeyType="search"
                clearButtonMode="always"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        minWidth: "85%",
        margin: 2,
        borderRadius: 15,
        backgroundColor: "#edebeb",
        padding: 10,
        paddingTop: 10,
        color: "black"
    },
    bar: {
        alignSelf: "center",
    }
});
