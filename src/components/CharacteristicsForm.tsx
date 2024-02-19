import { FC, FormEventHandler } from "react";
import { curry } from "lodash";
import { z } from "zod";
import type { Train, TrainCharacteristic } from "@/api/train";
import { Button } from "@/ui/Button";
import { NumberInput } from "@/ui/NumberInput";
import { Form, FormActions } from "@/ui/Form";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    TableTitle,
} from "@/ui/Table";
import { validate } from "@/utils/validation";

export type CharacteristicChangeHandler = (
    index: number,
    fieldName: keyof TrainCharacteristic,
    value: number
) => void;

interface CharacteristicsFormProps {
    train: Train;
    onCharacteristicChange: CharacteristicChangeHandler;
    onSubmit: () => void;
}

const validationSchema = z.object({
    speed: z.number().int().nonnegative(),
    force: z.number().nonnegative(),
    engineAmperage: z.number().int().positive(),
});

export const CharacteristicsForm: FC<CharacteristicsFormProps> = ({
    train,
    onCharacteristicChange,
    onSubmit,
}) => {
    let isValidForm = true;

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        onSubmit();
    };

    const handleChange = curry(onCharacteristicChange);

    return (
        <Form onSubmit={handleSubmit}>
            <Table>
                <TableTitle>Характеристики</TableTitle>
                <TableTitle>{train.name}</TableTitle>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Ток двигателя</TableHeadCell>
                        <TableHeadCell>Сила тяги</TableHeadCell>
                        <TableHeadCell>Скорость</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {train.characteristics.map((characteristic, index) => {
                        const validationResult = validate(
                            validationSchema,
                            characteristic
                        );
                        const errors = validationResult.errors;
                        isValidForm &&= validationResult.success;

                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <NumberInput
                                        value={characteristic.engineAmperage}
                                        invalid={!!errors?.engineAmperage}
                                        onChange={handleChange(
                                            index,
                                            "engineAmperage"
                                        )}
                                    />
                                </TableCell>
                                <TableCell>
                                    <NumberInput
                                        value={characteristic.force}
                                        invalid={!!errors?.force}
                                        onChange={handleChange(index, "force")}
                                    />
                                </TableCell>
                                <TableCell>
                                    <NumberInput
                                        value={characteristic.speed}
                                        invalid={!!errors?.speed}
                                        onChange={handleChange(index, "speed")}
                                    />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <FormActions>
                <Button disabled={!isValidForm}>Отправить данные</Button>
            </FormActions>
        </Form>
    );
};
