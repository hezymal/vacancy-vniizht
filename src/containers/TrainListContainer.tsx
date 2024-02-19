import { FC, useCallback, useEffect } from "react";
import { Train } from "@/api/train";
import { TrainList } from "@/components/TrainList";
import { fetchTrains, selectTrain } from "@/features/trains";
import { Alert } from "@/ui/Alert";
import { useAppDispatch, useAppSelector } from "@/store";

export const TrainListContainer: FC = () => {
    const dispatch = useAppDispatch();

    const { trains, status } = useAppSelector((state) => state.trains);

    useEffect(() => {
        dispatch(fetchTrains());
    }, [dispatch]);

    const handleTrainSelect = useCallback(
        (train: Train) => {
            dispatch(selectTrain({ train }));
        },
        [dispatch]
    );

    if (status === "loading") {
        return <Alert type="info">Идет загрузка...</Alert>;
    }

    if (status === "error") {
        return <Alert type="error">Произошла ошибка при загрузке</Alert>;
    }

    return <TrainList trains={trains} onTrainSelect={handleTrainSelect} />;
};
