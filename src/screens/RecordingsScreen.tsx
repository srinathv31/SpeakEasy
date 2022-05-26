// Source Imports
import React from "react";
import RecordingsHeader from "../components/RecordingsHeader";
import RecordingsList from "../components/RecordingsList";

export default function RecordingsScreen(): JSX.Element {
    return(
        <>
            <RecordingsHeader />
            <RecordingsList />
        </>
    );
}
