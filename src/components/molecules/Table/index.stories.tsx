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
  CAPYABLE: 2,
  LONG_TEXT: 6,
  LONG_TEXT_COPYABLE: 7,
};

export const Default: Story = {
  render: () => {
    return (
      <>
        <Table>
          <Table.Header>
            {tableData.titles.map((title, columnIndex) => (
              <Table.Title
                maxWidth={
                  [
                    COLUMN_INDEX.LONG_TEXT,
                    COLUMN_INDEX.LONG_TEXT_COPYABLE,
                  ].includes(columnIndex)
                    ? "150px"
                    : undefined
                }
                key={`header-${columnIndex}`}
              >
                {title}
              </Table.Title>
            ))}
          </Table.Header>
          <Table.Body>
            {tableData.bodies.map((body, rowIndex) => (
              <Table.Row key={rowIndex}>
                {Object.values(body).map((e, columnIndex) => {
                  if (typeof e === "boolean")
                    return (
                      <Table.Cell
                        columnIndex={columnIndex}
                        key={`body-${rowIndex + 1}-${columnIndex}`}
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
                      columnIndex={columnIndex}
                      key={`body-${rowIndex + 1}-${columnIndex}`}
                      maxWidth={
                        [
                          COLUMN_INDEX.LONG_TEXT,
                          COLUMN_INDEX.LONG_TEXT_COPYABLE,
                        ].includes(columnIndex)
                          ? "150px"
                          : undefined
                      }
                      copyMessage={
                        COLUMN_INDEX.CAPYABLE === columnIndex
                          ? {
                              success: `${e}를 복사하였습니다.`,
                            }
                          : COLUMN_INDEX.LONG_TEXT_COPYABLE
                          ? {
                              success:
                                "긴 텍스트는 토스트에 안보여줌. 글고 복사 성공",
                            }
                          : undefined
                      }
                    >
                      {e + String(rowIndex + 1)}
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
