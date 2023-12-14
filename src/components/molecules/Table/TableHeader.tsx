import { PropsWithChildren } from "react";

export interface TableHeaderProps extends PropsWithChildren {
  className?: string;
}
export const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={className}>
      <tr>{children}</tr>
    </thead>
  );
};
