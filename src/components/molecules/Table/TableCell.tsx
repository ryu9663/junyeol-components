import { CSSProperties, PropsWithChildren } from "react";
import { cleanClassName } from "@/utils";
import { isString } from "@/utils/public/is";
import { HoverTableCell } from "@/components/molecules/Table/HoverTableCell";
import { useTableStore } from "@/components/molecules/Table/index.store";
import styles from "./TableCell.module.scss";

export interface TableCellProps extends PropsWithChildren {
  className?: string;
  maxWidth?: CSSProperties["maxWidth"];
  copiable?: boolean;
  columnIndex: number;
}
export const TableCell = ({
  children,
  className,
  maxWidth,
  copiable = false,
  columnIndex,
}: TableCellProps) => {
  const hoveredColumn = useTableStore((state) => state.hoveredColumn);
  const classes = `${className} ${maxWidth ? "max-w-" + maxWidth : ""} ${
    hoveredColumn === columnIndex ? styles.hovered : ""
  }`;

  return (
    <td className={`${cleanClassName(classes)}`}>
      {maxWidth || copiable ? (
        <HoverTableCell
          copiable={copiable}
          maxWidth={
            maxWidth && (isString(maxWidth) ? parseInt(maxWidth, 10) : maxWidth)
          }
        >
          {children}
        </HoverTableCell>
      ) : (
        <div>
          <pre>{children}</pre>
        </div>
      )}
    </td>
  );
};
