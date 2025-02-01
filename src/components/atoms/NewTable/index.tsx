import {
  //   MRT_Table, //import alternative sub-component if we do not want toolbars
  //   type MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
  MRT_TableOptions,
  MRT_RowData,
} from "material-react-table";

export interface NewTableProps<TData extends MRT_RowData>
  extends MRT_TableOptions<TData> {}

export const NewTable = <TData extends MRT_RowData>({
  ...props
}: NewTableProps<TData>) => {
  const table = useMaterialReactTable({
    ...props,
  });

  //using MRT_Table instead of MaterialReactTable if we do not need any of the toolbar components or features
  return <MaterialReactTable table={table} />;
};
