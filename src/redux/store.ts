import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./indexSlice";
import recordingListReducer from "./recordingListSlice";
import recordingReducer from "./recordingSlice";

export const store = configureStore({
    reducer: {
        indexTracker: indexReducer,
        recordingTracker: recordingReducer,
        recordingListTracker: recordingListReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
