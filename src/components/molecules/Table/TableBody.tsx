import { PropsWithChildren } from "react";

export interface TableBodyProps extends PropsWithChildren {
  className?: string;
}
export const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={className}>{children}</tbody>;
};
