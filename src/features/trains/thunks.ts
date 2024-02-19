import {
    Action,
    ThunkAction,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import * as api from "@/api/train";
import { SLICE_NAME } from "./constants";
import type { RootState } from "@/store";

export const fetchTrains = createAsyncThunk(`${SLICE_NAME}/fetchTrains`, () =>
    api.fetchTrains()
);

export const showTrainSpeedCharacteristics = (): ThunkAction<
    void,
    RootState,
    void,
    Action
> => {
    return (_, getState) => {
        const selectedTrain = getState().trains.selectedTrain;
        if (!selectedTrain) {
            return;
        }

        const sortedSpeeds = selectedTrain.characteristics
            .map((c) => c.speed)
            .sort((a, b) => a - b);

        console.log(sortedSpeeds);
    };
};
