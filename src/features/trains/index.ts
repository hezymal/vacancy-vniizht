import slice from "./slice";

export * from "./thunks";
export const { selectTrain, changeSelectedTrain } = slice.actions;
export { slice };
