import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RecordingItem from "../interfaces/Recording";
import { RootState } from "./store";

interface RecordingListState {
    value: RecordingItem[]
}

const initialState: RecordingListState = {
    value: [
        { name: "Recording 1", expand: false, audioFile: "", textFile: "", timeLength: "3:31 PM", date: "May 17, 2019" },
        { name: "Recording 2", expand: false, audioFile: "", textFile: "", timeLength: "3:35 PM", date: "May 17, 2019" },
        { name: "Recording 3", expand: false, audioFile: "", textFile: "", timeLength: "3:47 PM", date: "May 17, 2019" },
    ]
};

export const recordingListSlice = createSlice({
    name: "recordingListTracker",
    initialState,
    reducers: {
        toggleExpand: (state, action: PayloadAction<RecordingItem>) => {
            state.value.forEach(recording => {
                recording.expand = false;
                if (recording.name === action.payload.name) {
                    recording.expand = true;
                }
            });
        }
    }
});

export const { toggleExpand } = recordingListSlice.actions;

export const selectRecordingList = (state: RootState) => state.recordingListTracker.value;

export default recordingListSlice.reducer;
