/* eslint-disable react-hooks/rules-of-hooks */
import { TimeBoard } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof TimeBoard> = {
  title: "molecules/TimeBoard",
  component: TimeBoard,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimeBoard>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState({ hour: 0, minute: 0 });
    return (
      <div style={{ width: "600px", height: "300px", position: "relative" }}>
        <TimeBoard value={value} onChange={(value) => setValue(value)} />

        <div style={{ position: "absolute", bottom: 0 }}>
          {JSON.stringify(value)}
        </div>
      </div>
    );
  },
};
