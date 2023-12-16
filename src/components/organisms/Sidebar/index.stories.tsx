import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { Category, SubCategoryList } from "@/index";
import { getCustomDateString } from "@/utils";

const meta: Meta<typeof Sidebar> = {
  title: "organisms/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <div style={{ background: "#F9F9F9", padding: "30px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => {
    const yesterday = getCustomDateString(1);

    const twoDaysAgo = getCustomDateString(2);

    const threeDaysAgo = getCustomDateString(3);

    const fourDaysAgo = getCustomDateString(4);

    const category = [
      {
        category: "dev",
        subcategories: [
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
        ],
      },
      {
        category: "mystory",
        subcategories: [
          {
            subCategoryLink: (
              <a target="_blank" href="/posts/mystory/about">
                about
              </a>
            ),
            createdAt: yesterday,
          },
          {
            subCategoryLink: (
              <a target="_blank" href="/posts/mystory/travel">
                travel
              </a>
            ),
            createdAt: threeDaysAgo,
          },
        ],
      },
    ];

    return (
      <main style={{ height: "100vh", width: "100vw", background: "white" }}>
        <Sidebar
          linkToPosts={
            <a target="_blank" href="/posts">
              전체보기
            </a>
          }
        >
          <ul>
            {category.map((el, i) => (
              <li key={i}>
                <Category
                  CategoryLink={
                    <a target="_blank" href={`/${el.category}`}>
                      {el.category}
                    </a>
                  }
                >
                  <SubCategoryList subCategories={el.subcategories} />
                </Category>
              </li>
            ))}
          </ul>
        </Sidebar>
      </main>
    );
  },
};
