/* eslint-disable react-hooks/rules-of-hooks */

import { NewSelect } from "@/components/atoms/NewSelect";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NewSelect> = {
  title: "molecules/NewSelect",
  component: NewSelect,
  argTypes: {},
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewSelect>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <div
          style={{
            height: "500px",
          }}
        >
          <NewSelect
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        </div>
      </>
    );
  },
};
