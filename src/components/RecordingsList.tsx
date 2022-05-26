// Source Imports
import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RecordingItem from "../interfaces/Recording";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleExpand } from "../redux/recordingListSlice";
import ExpandedRecording from "./ExpandedRecording";
import SearchBar from "./SearchBar";

export default function RecordingsList(): JSX.Element {
    const [query, setQuery] = useState<string>("");
    
    const recordingList = useAppSelector(state => state.recordingListTracker.value);
    const dispatch = useAppDispatch();

    const renderItem = ({ item, index }: {
        item: RecordingItem, index: number
    }) => {
        return (
            <>
                <View key={index} style={styles.item}>
                    <TouchableOpacity onPress={() => dispatch(toggleExpand(item))}>
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                            <Text>{item.date}</Text>
                            <Text>{item.timeLength}</Text>
                        </View>
                    </TouchableOpacity>
                    {item.expand && <ExpandedRecording item={item}/>}
                </View>
            </>
        );
    };

    return(
        <>
            <SearchBar setQuery={setQuery} query={query}/>
            <FlatList
                data={recordingList.filter(recording => {
                    if (query === "") {
                        return recording;
                    } else if (recording.name.toLowerCase().includes(query.toLowerCase())) {
                        return recording;
                    }
                })}
                renderItem={renderItem}
            />
        </>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
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
