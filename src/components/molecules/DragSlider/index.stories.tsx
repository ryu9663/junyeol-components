/* eslint-disable react-hooks/rules-of-hooks */

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
              img: {
                url: "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
                alt: "아무거나",
              },
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              img: {
                url: "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
                alt: "아무거나",
              },
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              img: {
                url: "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
                alt: "아무거나",
              },
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              img: {
                url: "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
                alt: "아무거나",
              },
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
          ].map(({ img, title, description, onClick }, i) => (
            <Card
              key={i}
              title={title}
              img={img}
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
