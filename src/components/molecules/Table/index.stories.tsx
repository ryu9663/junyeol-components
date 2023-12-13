import { Table } from "@/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "molecules/Table",
  component: Table,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    return (
      <Table>
        <Table.Header>
          {table.titles.map((title) => (
            <Table.Title key={title}>{title}</Table.Title>
          ))}
        </Table.Header>
        <Table.Body>
          {table.bodies.map((body, i) => (
            <Table.Row key={i}>
              {Object.values(body).map((e) => {
                if (typeof e === "boolean")
                  return (
                    <Table.Cell key={String(e)}>{e ? "O" : "X"}</Table.Cell>
                  );
                return <Table.Cell key={e}>{e}</Table.Cell>;
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

const table = {
  titles: ["학교", "이름", "학번", "학점", "군필", "졸업여부"],
  bodies: [
    {
      학교: "충북대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
    },
    {
      학교: "서울대학교",
      이름: "류준열2",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
    },
    {
      학교: "하버드대학교",
      이름: "류준열3",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
    },
  ],
};
