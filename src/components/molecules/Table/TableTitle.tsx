import { CSSProperties, PropsWithChildren } from "react";
import styles from "./index.module.scss";

export interface TableTitleProps extends PropsWithChildren {
  maxWidth?: CSSProperties["maxWidth"];
}
export const TableTitle = ({ children, maxWidth }: TableTitleProps) => {
  return (
    <th>
      <div style={{ width: maxWidth }} className={styles["title-content"]}>
        {children}
      </div>
    </th>
  );
};
