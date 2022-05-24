// Source Imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Redux Imports
import { useAppSelector } from "../redux/hooks";

export default function MainTextDisplay(): JSX.Element {
    const isRecording = useAppSelector(state => state.recordingTracker.value);

    return(
        <View>
            {isRecording === false ? 
                <Text style={styles.indicatorText}>Press to Start Recording</Text> :
                <Text style={styles.speechText}>Text To Speech</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    indicatorText: {
        fontSize: 20,
    },
    speechText: {
        fontSize: 40
    }
});
