import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
export interface TableRowProps extends PropsWithChildren {
  className?: string;
}
export const TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={`${className} ${styles["table-row"]}`}>{children}</tr>;
};
