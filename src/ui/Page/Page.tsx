import { FC, ReactNode } from "react";
import styles from "./Page.module.scss";

interface PageProps {
    left: ReactNode;
    right: ReactNode;
}

export const Page: FC<PageProps> = ({ left, right }) => {
    return (
        <div className={styles.Page}>
            <div className={styles["Page-LeftPart"]}>{left}</div>
            <div className={styles["Page-RightPart"]}>{right}</div>
        </div>
    );
};
