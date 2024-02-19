import { FC } from "react";
import { Page } from "@/ui/Page";
import { CharacteristicsFormContainer } from "./CharacteristicsFormContainer";
import { TrainListContainer } from "./TrainListContainer";

export const TrainsPage: FC = () => {
    return (
        <Page
            left={<TrainListContainer />}
            right={<CharacteristicsFormContainer />}
        />
    );
};
