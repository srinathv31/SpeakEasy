// Source Imports
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/pageStyles";
import Icon from "react-native-vector-icons/Ionicons";

export default function RecordingsScreen(): JSX.Element {
    return(
        <View style={styles.container}>
            <Text>All Recordings</Text>
            <Icon name="book" size={30} color="#900" />
        </View>
    );
}
