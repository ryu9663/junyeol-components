import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/atoms/Toast";
import { Category } from "@/components/molecules/Category";
import { Link, MemoryRouter } from "react-router-dom";
import { SubCategoryList } from "@/index";

const meta: Meta<typeof Category> = {
  title: "molecules/Category",
  component: Category,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

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
        categoryLink: <Link to="/posts?filter=react">react</Link>,
        publishedAt: yesterday,
      },
      {
        categoryLink: <Link to="/posts?filter=next">next</Link>,
        publishedAt: threeDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=typescript">typescript</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=graphQL">graphQL</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=react-query">react-query</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=zustand">zustand</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=javascript">javascript</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=html">html</Link>,
        publishedAt: fourDaysAgo,
      },
      {
        categoryLink: <Link to="/posts?filter=css">css</Link>,
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
