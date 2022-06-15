// Source Imports
import React from "react";
import { View } from "react-native";
import RecordButton from "../components/RecordButton";
import styles from "../styles/pageStyles";

export default function RecordScreen(): JSX.Element {
    return(
        <View style={styles.container}>
            <RecordButton />
        </View>
    );
}
