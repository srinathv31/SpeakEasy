// Source Imports
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ExpandedRecording(): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginVertical: 20 }}>
            <Icon name="play" size={20}></Icon>
            <Icon name="more-horizontal" size={20}></Icon>
        </View>
    );
}
