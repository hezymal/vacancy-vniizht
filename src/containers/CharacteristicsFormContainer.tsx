import { FC } from "react";
import {
    CharacteristicChangeHandler,
    CharacteristicsForm,
} from "@/components/CharacteristicsForm";
import {
    changeSelectedTrain,
    showTrainSpeedCharacteristics,
} from "@/features/trains";
import { useAppDispatch, useAppSelector } from "@/store";

export const CharacteristicsFormContainer: FC = () => {
    const dispatch = useAppDispatch();

    const train = useAppSelector((state) => state.trains.selectedTrain);

    const handleCharacteristicChange: CharacteristicChangeHandler = (
        index,
        fieldName,
        value
    ) => {
        dispatch(changeSelectedTrain({ index, fieldName, value }));
    };

    const handleSubmit = () => {
        dispatch(showTrainSpeedCharacteristics());
    };

    if (!train) {
        return null;
    }

    return (
        <CharacteristicsForm
            train={train}
            onCharacteristicChange={handleCharacteristicChange}
            onSubmit={handleSubmit}
        />
    );
};
