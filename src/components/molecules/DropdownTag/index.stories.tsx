/* eslint-disable react-hooks/rules-of-hooks */
import { Input, DropdownTag, Selectbox } from "@/index";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DropdownTag> = {
  title: "molecules/DropdownTag",
  component: DropdownTag,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof DropdownTag>;

export const Default: Story = {
  render: () => {
    const [radius, setRadius] = useState("");

    return (
      <DropdownTag name="검색지 옵션 변경하기">
        <div>
          <Selectbox
            name="관광지 검색 수"
            size="medium"
            onChange={(v) => console.log(v)}
            options={[
              { name: "10개", value: 10 },
              { name: "20개", value: 20 },
              { name: "30개", value: 30 },
              { name: "40개", value: 40 },
              { name: "50개", value: 50 },
            ]}
          />

          <Input
            type="text"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            validation={(value) => {
              console.log(typeof value, Number(value));
              return isNaN(Number(value)) ? "숫자만 입력해주세요" : "";
            }}
            label={{ htmlFor: "radius", name: "반경" }}
            placeholder="반경(m)"
          />
        </div>
      </DropdownTag>
    );
  },
};
