/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import { DateValue } from "@/components/atoms";
import { DatePicker } from "@/components/molecules/DatePicker";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "molecules/DatePicker",
  component: DatePicker,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<DateValue>(new Date());

    return (
      <div style={{ height: "500px" }}>
        <DatePicker value={value} onChange={setValue} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {value?.toLocaleString()}
      </div>
    );
  },
};
