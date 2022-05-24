// Source Imports
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

// Redux Imports
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleValue } from "../redux/recordingSlice";

export default function RecordButton(): JSX.Element {
    const isRecording = useAppSelector(state => state.recordingTracker.value);
    const dispatch = useAppDispatch();

    return(
        <Icon onPress={() => dispatch(toggleValue())}
            name={isRecording === false ? "mic-circle" : "stop-circle-outline"} size={100} color="#900"></Icon>
    );
}
