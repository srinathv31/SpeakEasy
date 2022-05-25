// Source Imports
import React, { useState } from "react";
import RecordingsHeader from "../components/RecordingsHeader";
import RecordingsList from "../components/RecordingsList";
import SearchBar from "../components/SearchBar";

export default function RecordingsScreen(): JSX.Element {
    const [query, setQuery] = useState<string>("");

    return(
        <>
            <RecordingsHeader />
            <SearchBar setQuery={setQuery} query={query}/>
            <RecordingsList />
        </>
    );
}
