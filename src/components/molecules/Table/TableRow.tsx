import { PropsWithChildren } from "react";

export interface TableRowProps extends PropsWithChildren {
  className?: string;
}
export const TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={className}>{children}</tr>;
};
