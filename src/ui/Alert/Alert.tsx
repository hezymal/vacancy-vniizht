import classNames from "classnames";
import { FC, ReactNode } from "react";
import styles from "./Alert.module.scss";

interface AlertProps {
    children: ReactNode;
    type: "info" | "error";
}

export const Alert: FC<AlertProps> = ({ children, type }) => {
    const className = classNames(styles.Alert, styles[`Alert_type_${type}`]);

    return <div className={className}>{children}</div>;
};
