import { CSSProperties, PropsWithChildren } from "react";
import { cleanClassName } from "@/utils";
import { isString } from "@/utils/public/is";
import { HoverTableCell } from "@/components/molecules/Table/HoverTableCell";
import { useTableStore } from "@/components/molecules/Table/index.store";
import styles from "./TableCell.module.scss";

export interface CopyMessageType {
  success: string;
  fail?: string;
}

export interface TableCellProps extends PropsWithChildren {
  className?: string;
  maxWidth?: CSSProperties["maxWidth"];
  copyMessage?: CopyMessageType;
  columnIndex: number;
}
export const TableCell = ({
  children,
  className,
  maxWidth,
  copyMessage,
  columnIndex,
}: TableCellProps) => {
  const hoveredColumn = useTableStore((state) => state.hoveredColumn);
  const classes = `${className} ${maxWidth ? "max-w-" + maxWidth : ""} ${
    hoveredColumn === columnIndex ? styles.hovered : ""
  }`;

  return (
    <td className={`${cleanClassName(classes)}`}>
      {maxWidth || copyMessage ? (
        <HoverTableCell
          copyMessage={copyMessage}
          maxWidth={
            maxWidth && (isString(maxWidth) ? parseInt(maxWidth, 10) : maxWidth)
          }
        >
          {children}
        </HoverTableCell>
      ) : (
        <div>{children}</div>
      )}
    </td>
  );
};
