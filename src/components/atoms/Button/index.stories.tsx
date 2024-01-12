import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isLoading: {
      control: {
        type: "boolean",
        default: false,
        description: "loading",
      },
    },

    children: {
      control: {
        type: "string",
        default: "button name",
        description: "button name",
      },
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    size: "normal",
    children: "Button",
  },
};

export const NoBorder: Story = {
  args: {
    size: "normal",
    border: false,
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    border: true,
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    border: true,
    children: "Button",
  },
};

export const Loading: Story = {
  args: {
    size: "normal",
    border: true,
    children: "Button",
    isLoading: true,
  },
};
