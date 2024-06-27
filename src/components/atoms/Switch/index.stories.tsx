/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "atoms/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <Switch
        {...args}
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    );
  },
};
