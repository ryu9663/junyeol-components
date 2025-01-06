/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import { DateValue } from "@/components/atoms";
import { DatePicker } from "@/components/organisms/DatePicker";
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
        <hr />
        {value?.toLocaleString() || "선택된 날짜가 없습니다."}
        <br />
        <button
          style={{ border: "1px gray solid", padding: "3px" }}
          onClick={() => setValue(new Date())}
        >
          날짜 오늘로 변경
        </button>
        &nbsp; &nbsp;
        <button
          style={{ border: "1px gray solid", padding: "3px" }}
          onClick={() => setValue(null)}
        >
          날짜 초기화
        </button>
      </div>
    );
  },
};
