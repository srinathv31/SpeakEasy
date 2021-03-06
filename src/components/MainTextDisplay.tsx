// Source Imports
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

// Redux Imports
import { useAppSelector } from "../redux/hooks";

export default function MainTextDisplay({ text }: {
    text: string
}): JSX.Element {
    const isRecording = useAppSelector(state => state.recordingTracker.value);

    const wordsToMark = ["test", "like", "so", "i", "me", "just"];

    return(
        <>
            {isRecording === false && text === "" ? 
                <Text style={styles.indicatorText}>Press to Start Recording</Text> :
                <ScrollView style={{ margin: 5 }}>
                    <Text style={styles.speechText}>{text.split(" ").map((word, ind) => 
                        <Text key={ind} style={{ color: wordsToMark.includes(word.toLowerCase()) ? "crimson": "black" }}>
                            {word+ " "}
                        </Text>)
                    }</Text>
                </ScrollView>
            }
        </>
    );
}

const styles = StyleSheet.create({
    indicatorText: {
        fontSize: 20,
    },
    speechText: {
        fontSize: 40,
        fontWeight: "300"
    }
});
