import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Table.module.scss";

interface TableProps {
    children: ReactNode;
}

interface TableTitleProps {
    children: ReactNode;
}

interface TableHeadProps {
    children: ReactNode;
}

interface TableHeadCellProps {
    children: ReactNode;
}

interface TableBodyProps {
    children: ReactNode;
}

interface TableRowProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLTableRowElement>;
}

interface TableCellProps {
    children: ReactNode;
}

export const Table: FC<TableProps> = (props) => {
    return <table className={styles.Table} {...props} />;
};

export const TableTitle: FC<TableTitleProps> = (props) => {
    return <caption className={styles.TableTitle} {...props} />;
};

export const TableHead: FC<TableHeadProps> = (props) => {
    return <thead className={styles.TableHead} {...props} />;
};

export const TableHeadCell: FC<TableHeadCellProps> = (props) => {
    return <th className={styles.TableHeadCell} {...props} />;
};

export const TableBody: FC<TableBodyProps> = (props) => {
    return <tbody className={styles.TableBody} {...props} />;
};

export const TableRow: FC<TableRowProps> = (props) => {
    return <tr className={styles.TableRow} {...props} />;
};

export const TableCell: FC<TableCellProps> = (props) => {
    return <td className={styles.TableCell} {...props} />;
};
