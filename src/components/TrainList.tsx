import { FC, memo } from "react";
import type { Train } from "@/api/train";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    TableTitle,
} from "@/ui/Table";

interface TrainListProps {
    trains: Train[];
    onTrainSelect: (train: Train) => void;
}

export const TrainList: FC<TrainListProps> = memo(
    ({ trains, onTrainSelect }) => {
        return (
            <Table>
                <TableTitle>Поезда</TableTitle>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Название</TableHeadCell>
                        <TableHeadCell>Описание</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trains.map((train) => (
                        <TableRow
                            key={train.name}
                            onClick={() => onTrainSelect(train)}
                        >
                            <TableCell>{train.name}</TableCell>
                            <TableCell>{train.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
);
