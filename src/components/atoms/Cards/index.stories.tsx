/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "atoms/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", background: "skyblue" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    image: {
      url: {
        control: {
          type: "string",
          default:
            "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
          description: "imgurl",
        },
      },
      alt: {
        control: {
          type: "string",
          default: "아무거나",
          description: "imgalt",
        },
      },
    },
    description: {
      fontSize: {
        control: {
          type: "string",
          default: "normal",
          description: "small, normal, large",
        },
      },
      content: {
        control: {
          type: "string",
          default: "hihihihi",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Card
          image={{
            url: "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
            alt: "아무거나",
          }}
          title="Next App router에서 use client가 CSR을 뜻하지는 않는다."
          description={
            "분명히 서버컴포넌트로 렌더링되는건 아닌데,, use client를 사용하면 CSR로 된다는 뜻이 아닌가? 하고 공식문서를 보았다. 공식문서에서 클라이언트 컴포넌트 (use client) 가 어떻게 렌더링 되는지 잘 작성되어 있다."
          }
        />
      </>
    );
  },
};
