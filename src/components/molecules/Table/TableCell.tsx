import { CSSProperties, PropsWithChildren } from "react";
import { cleanClassName } from "@/utils";
import { isString } from "@/utils/public/is";
import { HoverTableCell } from "@/components/molecules/Table/HoverTableCell";
export interface TableCellProps extends PropsWithChildren {
  className?: string;
  maxWidth?: CSSProperties["maxWidth"];
}
export const TableCell = ({
  children,
  className,
  maxWidth,
}: TableCellProps) => {
  const classes = `${className} ${maxWidth ? "max-w-" + maxWidth : ""} `;

  return (
    <td className={`${cleanClassName(classes)} `}>
      {maxWidth ? (
        <HoverTableCell
          maxWidth={isString(maxWidth) ? parseInt(maxWidth, 10) : maxWidth}
        >
          {children}
        </HoverTableCell>
      ) : (
        <div>{children}</div>
      )}
    </td>
  );
};
