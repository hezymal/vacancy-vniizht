import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
    children,
    disabled,
    type = "submit",
    onClick,
}) => {
    return (
        <button
            className={styles.Button}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
