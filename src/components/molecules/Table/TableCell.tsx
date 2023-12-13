import { PropsWithChildren } from "react";

export interface TableCellProps extends PropsWithChildren {
  className?: string;
}
export const TableCell = ({ children, className }: TableCellProps) => {
  return <td className={className}>{children}</td>;
};
