// Source Imports
import React from "react";
import { View } from "react-native";
import MainTextDisplay from "../components/MainTextDisplay";
import RecordButton from "../components/RecordButton";
import styles from "../styles/pageStyles";

export default function MiddleScreen(): JSX.Element {
    return(
        <View style={styles.container}>
            <MainTextDisplay />
            <RecordButton />
        </View>
    );
}
