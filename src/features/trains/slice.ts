import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Train, TrainCharacteristic } from "@/api/train";
import { SLICE_NAME } from "./constants";
import { fetchTrains } from "./thunks";

interface State {
    status: "idle" | "loading" | "error";
    selectedTrain: Train | null;
    trains: Train[];
}

type SelectTrainAction = PayloadAction<{ train: Train }>;

type ChangeSelectedTrainAction = PayloadAction<{
    index: number;
    fieldName: keyof TrainCharacteristic;
    value: number;
}>;

const initialState: State = {
    status: "idle",
    selectedTrain: null,
    trains: [],
};

const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        selectTrain(state, action: SelectTrainAction) {
            state.selectedTrain = action.payload.train;
        },
        changeSelectedTrain(state, action: ChangeSelectedTrainAction) {
            if (state.selectedTrain === null) {
                return;
            }

            const { index, fieldName, value } = action.payload;
            const characteristics = state.selectedTrain.characteristics;
            characteristics[index][fieldName] = value;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTrains.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTrains.fulfilled, (state, action) => {
                state.trains = action.payload;
                state.status = "idle";
            })
            .addCase(fetchTrains.rejected, (state) => {
                state.trains = [];
                state.status = "error";
            });
    },
});

export default slice;
