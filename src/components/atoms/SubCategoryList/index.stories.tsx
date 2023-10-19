/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { SubCategoryList } from ".";
import { Link, MemoryRouter } from "react-router-dom";
import { getCustomDateString } from "@/utils";

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
    const yesterday = getCustomDateString(1);

    const twoDaysAgo = getCustomDateString(2);

    const threeDaysAgo = getCustomDateString(3);

    const fourDaysAgo = getCustomDateString(4);

    const subCategory = [
      {
        subCategoryLink: <Link to="/posts?filter=react">react</Link>,
        createdAt: yesterday,
      },
      {
        subCategoryLink: <Link to="/posts?filter=next">next</Link>,
        createdAt: twoDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=typescript">typescript</Link>,
        createdAt: threeDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=graphQL">graphQL</Link>,
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: (
          <Link to="/posts?filter=react-query">react-query</Link>
        ),
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=zustand">zustand</Link>,
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=javascript">javascript</Link>,
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=html">html</Link>,
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=css">css</Link>,
        createdAt: fourDaysAgo,
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
        <SubCategoryList subCategories={subCategory} />
      </MemoryRouter>
    );
  },
};
