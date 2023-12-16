/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { SubCategoryList } from ".";
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
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=react">
            react
          </a>
        ),
        createdAt: yesterday,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=next">
            next
          </a>
        ),
        createdAt: twoDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=typescript">
            typescript
          </a>
        ),
        createdAt: threeDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=graphQL">
            graphQL
          </a>
        ),
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=react-query">
            react-query
          </a>
        ),
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=zustand">
            zustand
          </a>
        ),
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=javascript">
            javascript
          </a>
        ),
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=html">
            html
          </a>
        ),
        createdAt: fourDaysAgo,
      },
      {
        subCategoryLink: (
          <a target="_blank" href="/posts?filter=css">
            css
          </a>
        ),
        createdAt: fourDaysAgo,
      },
    ];

    return (
      <>
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
      </>
    );
  },
};
