// Source Imports
import React from "react";
import { Text, View } from "react-native";
import RecordButton from "../components/RecordButton";
import styles from "../styles/pageStyles";

export default function MiddleScreen(): JSX.Element {
    return(
        <View style={styles.container}>
            <Text>Press to Start Recording</Text>
            <RecordButton />
        </View>
    );
}
