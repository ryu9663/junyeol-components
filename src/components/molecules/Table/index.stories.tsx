import { Table, ToastContainer } from "@/index";
import { tableData } from "@/utils";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "molecules/Table",
  component: Table,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Table>;

// const ROW_COUNT = 20;

const COLUMN_INDEX = {
  CAPYABLE: 4,
  LONG_TEXT: 6,
  LONG_TEXT_COPYABLE: 7,
};

export const Default: Story = {
  render: () => {
    return (
      <>
        <Table>
          <Table.Header>
            {tableData.titles.map((title, i) => (
              <Table.Title
                maxWidth={
                  [
                    COLUMN_INDEX.LONG_TEXT,
                    COLUMN_INDEX.LONG_TEXT_COPYABLE,
                  ].includes(i)
                    ? "150px"
                    : undefined
                }
                key={i}
              >
                {title}
              </Table.Title>
            ))}
          </Table.Header>
          <Table.Body>
            {tableData.bodies.map((body, i) => (
              <Table.Row key={i}>
                {Object.values(body).map((e, columnIndex) => {
                  if (typeof e === "boolean")
                    return (
                      <Table.Cell
                        key={columnIndex}
                        maxWidth={
                          [
                            COLUMN_INDEX.LONG_TEXT,
                            COLUMN_INDEX.LONG_TEXT_COPYABLE,
                          ].includes(columnIndex)
                            ? "150px"
                            : undefined
                        }
                      >
                        {e ? "O" : "X"}
                      </Table.Cell>
                    );
                  return (
                    <Table.Cell
                      key={columnIndex}
                      maxWidth={
                        [
                          COLUMN_INDEX.LONG_TEXT,
                          COLUMN_INDEX.LONG_TEXT_COPYABLE,
                        ].includes(columnIndex)
                          ? "150px"
                          : undefined
                      }
                      copiable={
                        !![COLUMN_INDEX.LONG_TEXT_COPYABLE].includes(
                          columnIndex
                        )
                      }
                    >
                      {e + String(i + 1)}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <ToastContainer />
      </>
    );
  },
};
