import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { Category, SubCategoryList } from "@/index";
import { Link, MemoryRouter } from "react-router-dom";

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
    const category = [
      {
        category: "dev",
        subcategories: [
          {
            subCategoryLink: <Link to="/posts?filter=react">react</Link>,
            publishedAt: yesterday,
          },
          {
            subCategoryLink: <Link to="/posts?filter=next">next</Link>,
            publishedAt: threeDaysAgo,
          },
          {
            subCategoryLink: (
              <Link to="/posts?filter=typescript">typescript</Link>
            ),
            publishedAt: fourDaysAgo,
          },
          {
            subCategoryLink: <Link to="/posts?filter=graphQL">graphQL</Link>,
            publishedAt: fourDaysAgo,
          },
          {
            subCategoryLink: (
              <Link to="/posts?filter=react-query">react-query</Link>
            ),
            publishedAt: fourDaysAgo,
          },
          {
            subCategoryLink: <Link to="/posts?filter=zustand">zustand</Link>,
            publishedAt: fourDaysAgo,
          },
          {
            subCategoryLink: (
              <Link to="/posts?filter=javascript">javascript</Link>
            ),
            publishedAt: fourDaysAgo,
          },
          {
            subCategoryLink: <Link to="/posts?filter=html">html</Link>,
            publishedAt: fourDaysAgo,
          },
          {
            subCategoryLink: <Link to="/posts?filter=css">css</Link>,
            publishedAt: fourDaysAgo,
          },
        ],
      },
      {
        category: "mystory",
        subcategories: [
          {
            subCategoryLink: <Link to="/posts/mystory/about">about</Link>,
            publishedAt: yesterday,
          },
          {
            subCategoryLink: <Link to="/posts/mystory/travel">travel</Link>,
            publishedAt: threeDaysAgo,
          },
        ],
      },
    ];

    console.log(category);
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
