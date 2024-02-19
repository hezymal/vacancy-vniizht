import classNames from "classnames";
import { debounce } from "lodash";
import { ChangeEventHandler, FC, useEffect, useMemo, useState } from "react";
import styles from "./NumberInput.module.scss";

interface NumberInputProps {
    value: number;
    invalid?: boolean;
    onChange: (value: number) => void;
}

const WAIT_TIME = 250;

export const NumberInput: FC<NumberInputProps> = ({
    value,
    invalid,
    onChange,
}) => {
    const [realValue, setRealValue] = useState(value);

    const emitChange = useMemo(() => debounce(onChange, WAIT_TIME), [onChange]);

    useEffect(() => {
        setRealValue(value);
    }, [value]);

    const className = useMemo(() => {
        return classNames(styles.NumberInput, {
            [styles["NumberInput_invalid"]]: invalid,
        });
    }, [invalid]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setRealValue(event.currentTarget.valueAsNumber);
        emitChange(event.currentTarget.valueAsNumber);
    };

    return (
        <input
            type="number"
            className={className}
            value={isNaN(realValue) ? "" : realValue}
            onChange={handleChange}
        />
    );
};
