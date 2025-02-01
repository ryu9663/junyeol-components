/* eslint-disable react-hooks/rules-of-hooks */

import { NewTable } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { data, type Person } from "./makeData";
import { MRT_ColumnDef } from "material-react-table";

const meta: Meta<typeof NewTable> = {
  title: "atoms/MatarialTable",
  component: NewTable,
  argTypes: {
    enableRowSelection: {
      description: "각 로우 체크박스",
      defaultValue: true,
      control: { type: "boolean" },
    },
    enableColumnOrdering: {
      description: "각 컬럼 헤더의 드래그로 순서 변경",
      defaultValue: true,
      control: { type: "boolean" },
    },
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewTable>;

export const Default: Story = {
  render: ({ enableRowSelection, enableColumnOrdering }) => {
    return (
      <NewTable
        columns={columns}
        data={data}
        enableKeyboardShortcuts={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableRowSelection={enableRowSelection as boolean}
        enableColumnOrdering={enableColumnOrdering}
        renderCaption={() =>
          `이건 직접만든건 아니고 matarial-react-table 라이브러리 입니다.`
        }
      />
    );
  },
};

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
];
