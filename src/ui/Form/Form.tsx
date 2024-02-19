import { FC, FormEventHandler, ReactNode } from "react";
import styles from "./Form.module.scss";

interface FormProps {
    children: ReactNode;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}

interface FormActionsProps {
    children: ReactNode;
}

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
    return <form onSubmit={onSubmit}>{children}</form>;
};

export const FormActions: FC<FormActionsProps> = ({ children }) => {
    return <div className={styles.FormActions}>{children}</div>;
};
