// Source Imports
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function MenuTabBar(): JSX.Element {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Icon name="mic-circle" size={30} color="#900"></Icon>
            <Icon name="mic-circle" size={30} color="#900"></Icon>
            <Icon name="mic-circle" size={30} color="#900"></Icon>
        </View>
    );
}
