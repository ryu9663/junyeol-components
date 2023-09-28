/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";

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
      <MemoryRouter>
        <Header
          {...args}
          buttons={[
            { link: "/", children: "자기소개" },
            { link: "/carrer", children: "이력" },
            { link: "/whatidid", children: "했던 일" },
          ]}
        />
      </MemoryRouter>
    );
  },
};
