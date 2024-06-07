import { CSSProperties, PropsWithChildren } from "react";
import styles from "./index.module.scss";
import { useTableStore } from "@/components/molecules/Table/index.store";

export interface TableTitleProps extends PropsWithChildren {
  maxWidth?: CSSProperties["maxWidth"];
}
export const TableTitle = ({ children, maxWidth }: TableTitleProps) => {
  const setHoveredColumn = useTableStore((state) => state.setHoveredColumn);
  return (
    <th
      onMouseEnter={(e) => setHoveredColumn(e.currentTarget.cellIndex)}
      onMouseLeave={() => setHoveredColumn(undefined)}
    >
      <div style={{ maxWidth }} className={styles["table-title"]}>
        {children}
      </div>
    </th>
  );
};
