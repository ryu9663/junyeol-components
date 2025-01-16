/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { HeadlessCheckbox } from ".";

const meta: Meta<typeof HeadlessCheckbox> = {
  title: "atoms/HeadlessCheckbox",
  component: HeadlessCheckbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      control: {
        type: "boolean",
        default: false,
        description: "isChecked",
      },
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof HeadlessCheckbox>;

export const Default: Story = {
  render: (args) => {
    return (
      <HeadlessCheckbox {...args} id={"checkbox"}>
        <HeadlessCheckbox.Checkbox />
        <HeadlessCheckbox.Label>Checkbox</HeadlessCheckbox.Label>
      </HeadlessCheckbox>
    );
  },
};
