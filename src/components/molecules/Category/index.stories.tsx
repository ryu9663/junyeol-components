import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/atoms/Toast";
import { Category } from "@/components/molecules/Category";
import { Link, MemoryRouter } from "react-router-dom";
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
        subCategoryLink: <Link to="/posts?filter=react">react</Link>,
        publishedAt: yesterday,
      },
      {
        subCategoryLink: <Link to="/posts?filter=next">next</Link>,
        publishedAt: twoDaysAgo,
      },
      {
        subCategoryLink: <Link to="/posts?filter=typescript">typescript</Link>,
        publishedAt: threeDaysAgo,
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
        subCategoryLink: <Link to="/posts?filter=javascript">javascript</Link>,
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
    ];
    return (
      <MemoryRouter>
        <main style={{ height: "100vh", width: "100vw", background: "white" }}>
          <Category CategoryLink={<Link to="https://www.naver.com">dev</Link>}>
            <SubCategoryList subCategories={subCategory} />
          </Category>
        </main>
      </MemoryRouter>
    );
  },
};
