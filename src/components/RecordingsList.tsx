// Source Imports
import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RecordingItem from "../interfaces/Recording";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleExpand } from "../redux/recordingListSlice";
import ExpandedRecording from "./ExpandedRecording";

export default function RecordingsList(): JSX.Element {
    const recordingList = useAppSelector(state => state.recordingListTracker.value);
    const dispatch = useAppDispatch();

    const renderItem = ({ item, index }: {
        item: RecordingItem, index: number
    }) => {
        return (
            <TouchableOpacity onPress={() => dispatch(toggleExpand(item))}>
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

    return(
        <FlatList
            data={recordingList}
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
