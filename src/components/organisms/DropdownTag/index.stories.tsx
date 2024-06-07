import { DropdownTag, Input, Selectbox } from "@/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DropdownTag> = {
  title: "organisms/DropdownTag",
  component: DropdownTag,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownTag>;

export const Default: Story = {
  render: () => {
    return (
      <DropdownTag name="DropdownTag" fontSize="small" fontWeight={400}>
        <div>dropdown</div>
      </DropdownTag>
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <DropdownTag
        name="관광지 검색 옵션 변경"
        fontSize="small"
        fontWeight={400}
        size="large"
      >
        <Selectbox
          fontSize="normal"
          fontWeight={400}
          name="관광지 검색 수"
          size="normal"
          onChange={(numOfPlaces) => console.log(numOfPlaces)}
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
          value={30}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          validation={(value) => {
            return isNaN(Number(value)) ? "숫자만 입력해주세요" : "";
          }}
          label={{ htmlFor: "radius", name: "반경(km)" }}
          placeholder="반경(km)"
        />
      </DropdownTag>
    );
  },
};
