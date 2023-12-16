import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/atoms/Toast";
import { Category } from "@/components/molecules/Category";
import { SubCategoryList } from "@/index";
import { getCustomDateString } from "@/utils";

const meta: Meta<typeof Category> = {
  title: "molecules/Category",
  component: Category,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

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
      <MemoryRouter>
        <main style={{ height: "100vh", width: "100vw", background: "white" }}>
          <Category
            CategoryLink={
              <a target="_blank" href="https://www.naver.com">
                dev
              </a>
            }
          >
            <SubCategoryList subCategories={subCategory} />
          </Category>
        </main>
      </MemoryRouter>
    );
  },
};
