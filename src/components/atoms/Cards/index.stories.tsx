/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "atom/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100%", background: "skyblue" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <Card {...args} />
      </>
    );
  },
};
