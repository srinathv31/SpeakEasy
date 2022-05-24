import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface RecordingState {
    value: boolean
}

const initialState: RecordingState = {
    value: false
};

export const recordingSlice = createSlice({
    name: "isRecordingTracker",
    initialState,
    reducers: {
        toggleValue: state => {
            state.value = !state.value;
        }
    }
});

export const { toggleValue } = recordingSlice.actions;

export const selectIsRecording = (state: RootState) => state.recordingTracker.value;

export default recordingSlice.reducer;
