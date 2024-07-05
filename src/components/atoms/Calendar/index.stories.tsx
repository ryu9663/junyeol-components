/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import { Calendar, DateValue } from "@/components/atoms/Calendar";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "atoms/Calendar",
  component: Calendar,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<DateValue>(new Date());
    return (
      <>
        <Calendar value={value} onChange={setValue} />
        {value?.toLocaleString()}
      </>
    );
  },
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<DateValue>(new Date());
    return (
      <>
        <Calendar value={value} onChange={setValue} selectRange />
        {value?.toLocaleString().split(",")[0]} ~
        {value?.toLocaleString().split(",")[1]}
      </>
    );
  },
};
