import { Table } from "@/index";
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
                  >
                    {e + String(i + 1)}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

// eslint-disable-next-line storybook/prefer-pascal-case
export const tableData = {
  titles: [
    "학교",
    "이름",
    "학번",
    "학점",
    "군필",
    "졸업여부",
    "자기소개",
    "복사가능한 자기소개",
  ],
  bodies: [
    {
      학교: "충북대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: "안녕하세요 ",
      복사가능한_자기소개: "안녕하세요 copy",
    },
    {
      학교: "서울대학교",
      이름: "류준열2",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `안녕하세요 여러분 이건 매우 긴 텍스트입니다. 
        처음에는 말줄임표로 나타나지만, 
        Hover하면 전체 내용을 볼 수 있답니다.`,
      복사가능한_자기소개: `안녕하세요 여러분 이건 매우 긴 텍스트입니다. 
        처음에는 말줄임표로 나타나지만, 
        Hover하면 전체 내용을 볼 수 있답니다.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
  ],
};
