// Source Imports
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// Redux imports
import { setByValue } from "../redux/indexSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function MenuTabBar(): JSX.Element {
    const index = useAppSelector(state => state.indexTracker.value);
    const dispatch = useAppDispatch();

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Icon onPress={() => dispatch(setByValue(0))}
                name={index === 0 ? "book" : "book-outline"} size={30} color="#900"></Icon>
            <Icon onPress={() => dispatch(setByValue(1))}
                name={index === 1 ? "mic-circle" : "mic-circle-outline"} size={30} color="#900"></Icon>
            <Icon onPress={() => dispatch(setByValue(2))}
                name={index === 2 ? "stats-chart" : "stats-chart-outline"} size={30} color="#900"></Icon>
        </View>
    );
}
