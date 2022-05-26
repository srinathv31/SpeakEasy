// Source Imports
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import RecordingItem from "../interfaces/Recording";
import { useAppDispatch } from "../redux/hooks";
import { deleteRecording } from "../redux/recordingListSlice";

export default function ExpandedRecording({ item }: {
    item: RecordingItem
}): JSX.Element {
    const dispatch = useAppDispatch();

    return(
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginVertical: 20 }}>
                <Icon name="play" size={20}></Icon>
                <Icon onPress={() => dispatch(deleteRecording(item))} name="more-horizontal" size={20}></Icon>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>{item.textFile}</Text>
            </ScrollView>
        </View>
    );
}
