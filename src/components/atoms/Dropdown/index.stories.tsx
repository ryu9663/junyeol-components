/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "atoms/Dropdown",
  component: Dropdown,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => {
    return (
      <Dropdown isOpen>
        <div style={{ width: "200px", height: "300px", padding: "30px" }}>
          children이 들어온다.
        </div>
      </Dropdown>
    );
  },
};
