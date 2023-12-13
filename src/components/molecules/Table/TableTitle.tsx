import { CSSProperties, PropsWithChildren } from "react";
import styles from "./index.module.scss";

type MaxWidth = CSSProperties["maxWidth"];

export interface TableTitleProps extends PropsWithChildren {
  maxWidth?: MaxWidth;
}
export const TableTitle = ({ children }: TableTitleProps) => {
  return (
    <th>
      <div className={styles["title-content"]}>{children}</div>
    </th>
  );
};
