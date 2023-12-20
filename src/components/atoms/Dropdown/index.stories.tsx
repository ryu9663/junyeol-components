/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import { useState as createState } from "react";
import { Button } from "@/index";

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
    const [isOpen, setIsOpen] = createState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(!isOpen)}>Dropdown</Button>
        <Dropdown isOpen={isOpen}>
          <div style={{ width: "200px", height: "300px" }}>Dropdown</div>
        </Dropdown>
      </>
    );
  },
};
