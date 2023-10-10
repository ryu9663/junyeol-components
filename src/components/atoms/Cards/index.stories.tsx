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
    img: {
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
          img={{
            url: "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100",
            alt: "아무거나",
          }}
          title="아무거나"
          description={"하이하이"}
        />
      </>
    );
  },
};
