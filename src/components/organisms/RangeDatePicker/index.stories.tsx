/* eslint-disable react-hooks/rules-of-hooks */
import {
  RangeDatePicker,
  RangeDatePickerValueType,
} from "@/components/organisms/RangeDatePicker";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof RangeDatePicker> = {
  title: "organisms/RangeDatePicker",
  component: RangeDatePicker,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RangeDatePicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<RangeDatePickerValueType>([null, null]);
    return (
      <>
        <div style={{ width: "600px", height: "500px", position: "relative" }}>
          <RangeDatePicker
            value={value}
            onChange={setValue}
            leftInputProps={{ placeholder: "시작일을 선택해주세요." }}
            rightInputProps={{ placeholder: "종료일을 선택해주세요." }}
          />
          <br />
          <br />
          <br />
          <br />
          <div>
            시작일: {value[0]?.toLocaleString() || "선택된 날짜가 없습니다."}
          </div>
          <div>
            종료일: {value[1]?.toLocaleString() || "선택된 날짜가 없습니다."}
          </div>
          <br />
          <button
            style={{ border: "1px gray solid", padding: "3px" }}
            onClick={() => setValue([new Date(), new Date()])}
          >
            오늘로 변경
          </button>
          &nbsp; &nbsp;
          <button
            style={{ border: "1px gray solid", padding: "3px" }}
            onClick={() => setValue([null, null])}
          >
            초기화
          </button>
        </div>
      </>
    );
  },
};
