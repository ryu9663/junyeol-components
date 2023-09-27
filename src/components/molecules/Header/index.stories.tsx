/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "molecules/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100%", background: "skyblue" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <Header
          {...args}
          buttons={[
            { link: "https://www.naver.com", children: "자기소개" },
            { children: "이력" },
            { children: "했던 일" },
          ]}
        />
      </>
    );
  },
};
