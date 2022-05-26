import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RecordingItem from "../interfaces/Recording";
import { getMonthString } from "../utilities/calculateMonth";
import { findDuplicateNamesInList } from "../utilities/searchList";
import { RootState } from "./store";

interface RecordingListState {
    value: RecordingItem[]
}

const initialState: RecordingListState = {
    value: []
};

export const recordingListSlice = createSlice({
    name: "recordingListTracker",
    initialState,
    reducers: {
        toggleExpand: (state, action: PayloadAction<RecordingItem>) => {
            state.value.forEach(recording => {
                if (recording.name === action.payload.name) {
                    recording.expand === true ? recording.expand = false : recording.expand = true;
                } else {
                    recording.expand = false;
                }
            });
        },
        addRecording: (state, action: PayloadAction<string>) => {
            const todayDate = new Date();
            const recording = { name: "", expand: false, audioFile: "", textFile: "", timeLength: "3:31", date: "" };
            recording.name = findDuplicateNamesInList(state.value, `Recording ${state.value.length+1}`);
            recording.textFile = action.payload;
            recording.date = `${getMonthString(todayDate.getMonth()+1)} ${todayDate.getDate()}, ${todayDate.getFullYear()}`;
            state.value.push(recording);
        },
        deleteRecording: (state, action: PayloadAction<RecordingItem>) => {
            state.value = state.value.filter(item => item.name !== action.payload.name);
        }
    }
});

export const { toggleExpand, addRecording, deleteRecording } = recordingListSlice.actions;

export const selectRecordingList = (state: RootState) => state.recordingListTracker.value;

export default recordingListSlice.reducer;
