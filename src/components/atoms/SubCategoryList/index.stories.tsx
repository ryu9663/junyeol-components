/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { SubCategoryList } from ".";
import { Link, MemoryRouter } from "react-router-dom";

const meta: Meta<typeof SubCategoryList> = {
  title: "atoms/SubCategoryList",
  component: SubCategoryList,
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", background: "white" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SubCategoryList>;

export const Default: Story = {
  render: () => {
    const currentDate = new Date();

    // 어제의 날짜를 계산합니다.
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    // 3일 전의 날짜를 계산합니다.
    const threeDaysAgo = new Date(currentDate);
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    // 4일 전의 날짜를 계산합니다.
    const fourDaysAgo = new Date(currentDate);
    fourDaysAgo.setDate(currentDate.getDate() - 4);
    const subCategory = [
      {
        category: <Link to="/posts?filter=react">react</Link>,
        publishedAt: yesterday,
      },
      {
        category: <Link to="/posts?filter=next">next</Link>,
        publishedAt: threeDaysAgo,
      },
      {
        category: <Link to="/posts?filter=typescript">typescript</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        category: <Link to="/posts?filter=graphQL">graphQL</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        category: <Link to="/posts?filter=react-query">react-query</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        category: <Link to="/posts?filter=zustand">zustand</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        category: <Link to="/posts?filter=javascript">javascript</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        category: <Link to="/posts?filter=html">html</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        category: <Link to="/posts?filter=css">css</Link>,
        publishedAt: fourDaysAgo,
      },
    ];

    return (
      <MemoryRouter>
        <div>
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "0.75rem",
              marginLeft: "5px",
            }}
          >
            new
          </span>
          는 작성일로부터 3일이 안지났을때 붙는다.
        </div>
        <br />
        <SubCategoryList subCategory={subCategory} />
      </MemoryRouter>
    );
  },
};
