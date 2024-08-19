/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import { Button, DateValue } from "@/components/atoms";
import { DatePicker } from "@/components/molecules/DatePicker";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "organisms/DatePicker",
  component: DatePicker,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<DateValue | null>(null);

    return (
      <div style={{ height: "500px" }}>
        <DatePicker
          placeholder="날짜를 선택해주세요"
          value={value}
          onChange={setValue}
        />
        <br />
        <Button onClick={() => setValue(new Date())}>날짜 오늘로 변경</Button>
        <br />
        <br />
        <Button onClick={() => setValue(null)}>날짜 초기화</Button>
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
        {value?.toLocaleString() || "선택된 날짜가 없습니다."}
      </div>
    );
  },
};
