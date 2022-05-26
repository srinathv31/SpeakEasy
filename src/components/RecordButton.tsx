// Source Imports
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

// Redux Imports
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleValue } from "../redux/recordingSlice";
import { addRecording } from "../redux/recordingListSlice";

import Voice, { SpeechEndEvent, SpeechResultsEvent, SpeechStartEvent } from "@react-native-voice/voice";
import { View } from "react-native";
import MainTextDisplay from "./MainTextDisplay";

export default function RecordButton(): JSX.Element {
    const isRecording = useAppSelector(state => state.recordingTracker.value);
    const dispatch = useAppDispatch();

    const [result, setResult] = useState("");

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
    
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);
    
    const onSpeechStartHandler = (e: SpeechStartEvent) => {
        console.log("start handler==>>>", e);
    };
    const onSpeechEndHandler = (e: SpeechEndEvent) => {
        dispatch(toggleValue());
        console.log("stop handler", e);
    };
    
    const onSpeechResultsHandler = (e: SpeechResultsEvent) => {
        if (e.value !== undefined){
            const text = e.value[0];
            setResult(text);
            console.log("speech result handler", e);
        }
    };
    
    const startRecording = async () => {
        dispatch(toggleValue());
        try {
            await Voice.start("en-US");
        } catch (error) {
            console.log("error raised", error);
        }
    };
    
    const stopRecording = async () => {
        dispatch(addRecording(result));
        try {
            await Voice.stop();
        } catch (error) {
            console.log("error raised", error);
        }
        setResult("");
    };

    useEffect(() => {
        console.log(result);
    }, [result]);

    return(
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <MainTextDisplay text={result}/>
            <Icon onPress={isRecording === false ? () => startRecording() : () => stopRecording()}
                name={isRecording === false ? "mic-circle" : "stop-circle-outline"} size={100} color="#900"></Icon>
        </View>
        
    );
}
