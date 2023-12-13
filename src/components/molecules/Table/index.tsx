import { TableBody } from "@/components/molecules/Table/TableBody";
import { TableCell } from "@/components/molecules/Table/TableCell";
import { TableHeader } from "@/components/molecules/Table/TableHeader";
import { TableRow } from "@/components/molecules/Table/TableRow";
import { TableTitle } from "@/components/molecules/Table/TableTitle";
import { PropsWithChildren } from "react";

export interface TableProps extends PropsWithChildren {
  className?: string;
}
export const TableMain = ({ children }: TableProps) => {
  return (
    <article>
      <table>{children}</table>
    </article>
  );
};

export const Table = Object.assign(TableMain, {
  Header: TableHeader,
  Title: TableTitle,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
