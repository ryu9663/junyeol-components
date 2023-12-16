/* eslint-disable react-hooks/rules-of-hooks */

import { Label } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "atoms/Label",
  component: Label,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => {
    return (
      <Label htmlFor="text" className={args.className} isError={args.isError}>
        Label
      </Label>
    );
  },
};
