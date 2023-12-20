import { CSSProperties, PropsWithChildren } from "react";
import { cleanClassName } from "@/utils";
import { isString } from "@/utils/public/is";
import { HoverTableCell } from "@/components/molecules/Table/HoverTableCell";
export interface TableCellProps extends PropsWithChildren {
  className?: string;
  maxWidth?: CSSProperties["maxWidth"];
  copiable?: boolean;
}
export const TableCell = ({
  children,
  className,
  maxWidth,
  copiable = false,
}: TableCellProps) => {
  const classes = `${className} ${maxWidth ? "max-w-" + maxWidth : ""} `;

  return (
    <td className={`${cleanClassName(classes)} `}>
      {maxWidth ? (
        <HoverTableCell
          copiable={copiable}
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
