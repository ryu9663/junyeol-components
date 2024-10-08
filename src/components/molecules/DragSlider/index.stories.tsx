import type { Meta, StoryObj } from "@storybook/react";
import { DragSlider } from ".";
import { Card } from "@/index";

const meta: Meta<typeof DragSlider> = {
  title: "molecules/DragSlider",
  component: DragSlider,
  decorators: [
    (Story) => (
      <div style={{ background: "#F9F9F9", padding: "30px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DragSlider>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <DragSlider>
          {[
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi2"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi2"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi2"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: (
                <img
                  draggable={false}
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
          ].map(({ Thumbnail, title, description, onClick }, i) => (
            <Card
              createdAt="2023. 10. 16. "
              subCategoryLink={<a href="react">react</a>}
              key={i}
              title={title}
              Thumbnail={Thumbnail}
              description={description}
              onClick={onClick}
              boxShadow={false}
            />
          ))}
        </DragSlider>
      </>
    );
  },
};
