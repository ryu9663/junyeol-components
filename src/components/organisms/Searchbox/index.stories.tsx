/* eslint-disable react-hooks/rules-of-hooks */
import { Searchbox } from "@/components/organisms/Searchbox";
import { ChangeEventHandler, useState as createState } from "react";
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
    const [selectedValue, setSelectedValue] = createState(20);

    const handleClickOption = (value: number) => {
      setSelectedValue(value);
    };

    const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
      const _value = e.target.value;
      setValue(_value);
    };

    return (
      <>
        <Searchbox
          placeholder={args.placeholder || "관광지 검색 수"}
          onChange={handleSearch}
          onClickOption={handleClickOption}
          value={value}
          options={[
            { name: "10개", value: 10 },
            { name: "20개", value: 20 },
            { name: "30개", value: 30 },
            { name: "40개", value: 40 },
            { name: "50개", value: 50 },
          ]}
        />
        <span>서버에 보낼 값 : {selectedValue}</span>
      </>
    );
  },
};
