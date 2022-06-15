// Source Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RecordingsHeader(): JSX.Element {
    return(
        <View style={styles.item}>
            <Text style={styles.editButton}>Edit</Text>
            <Text style={styles.title}>All Recordings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomColor: "#bababa",
        borderBottomWidth: 1
    },
    title: {
        fontSize: 37,
        fontWeight: "bold"
    },
    editButton: {
        fontSize: 18,
        textAlign: "right",
        color: "#007AFF"
    },
});
