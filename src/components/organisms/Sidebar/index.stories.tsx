import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { Category, SubCategoryList } from "@/index";
import { Link, MemoryRouter } from "react-router-dom";
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
            subCategoryLink: <Link to="/posts?filter=react">react</Link>,
            createdAt: yesterday,
          },
          {
            subCategoryLink: <Link to="/posts?filter=next">next</Link>,
            createdAt: twoDaysAgo,
          },
          {
            subCategoryLink: (
              <Link to="/posts?filter=typescript">typescript</Link>
            ),
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
            subCategoryLink: (
              <Link to="/posts?filter=javascript">javascript</Link>
            ),
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
        ],
      },
      {
        category: "mystory",
        subcategories: [
          {
            subCategoryLink: <Link to="/posts/mystory/about">about</Link>,
            createdAt: yesterday,
          },
          {
            subCategoryLink: <Link to="/posts/mystory/travel">travel</Link>,
            createdAt: threeDaysAgo,
          },
        ],
      },
    ];

    return (
      <MemoryRouter>
        <main style={{ height: "100vh", width: "100vw", background: "white" }}>
          <Sidebar linkToPosts={<Link to="/posts">전체보기</Link>}>
            <ul>
              {category.map((el, i) => (
                <li key={i}>
                  <Category
                    CategoryLink={
                      <Link to={`/${el.category}`}>{el.category}</Link>
                    }
                  >
                    <SubCategoryList subCategories={el.subcategories} />
                  </Category>
                </li>
              ))}
            </ul>
          </Sidebar>
        </main>
      </MemoryRouter>
    );
  },
};
