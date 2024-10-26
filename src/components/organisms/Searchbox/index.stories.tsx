/* eslint-disable react-hooks/rules-of-hooks */
import { Searchbox } from "@/components/organisms/Searchbox";
import { useState as createState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Searchbox> = {
  title: "organisms/Searchbox",
  component: Searchbox,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Searchbox>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = createState("");

    const handleClickOption = (value: number) => {
      setValue(String(value));
    };

    /** 
     // !  validation을 사용하는 경우 onChange, value, validation 을 추가한다.
    const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
      const _value = e.target.value;
      setValue(_value);
    };
    */

    return (
      <div style={{ height: "600px" }}>
        <Searchbox
          placeholder={args.placeholder || "관광지 검색 수"}
          onClickOption={handleClickOption}
          /**
          // !  validation을 사용하는 경우 onChange, value, validation 을 추가한다.
          onChange={handleSearch}
          value={value}
          validation={(value) =>
            String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
          }
           */
          options={[
            { name: "10개", value: 10 },
            { name: "20개", value: 20 },
            { name: "30개", value: 30 },
            { name: "40개", value: 40 },
            { name: "50개", value: 50 },
          ]}
        />
        <span>서버에 보낼 값 : {value}</span>
      </div>
    );
  },
};
