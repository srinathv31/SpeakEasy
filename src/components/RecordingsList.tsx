// Source Imports
import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ExpandedRecording from "./ExpandedRecording";

export default function RecordingsList(): JSX.Element {
    const [data, setData] = useState<{ name: string, expand: boolean }[]>([
        { name: "Recording 1", expand: false },
        { name: "Recording 2", expand: false },
        { name: "Recording 3", expand: false },
    ]);

    const renderItem = ({ item, index }: {
        item: { name: string, expand: boolean }, index: number
    }) => {
        return (
            <TouchableOpacity onPress={() => expandRecording(item)}>
                <View key={index} style={styles.item}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                        <Text>May 17, 2019</Text>
                        <Text>3:02</Text>
                    </View>
                    {item.expand && <ExpandedRecording />}
                </View>
            </TouchableOpacity>
        );
    };

    function expandRecording(item: { name: string, expand: boolean }) {
        const dataCopy = [ ...data ];

        dataCopy.forEach(recording => {
            recording.expand = false;
            if (recording === item) {
                recording.expand = true;
            }
        });
        setData(dataCopy);
        console.log(data);
    }

    return(
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        // backgroundColor: "#f9c2ff",
        borderBottomColor: "#e0e0de",
        borderBottomWidth: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "500"
    },
});
