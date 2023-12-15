import { OptionTag } from "@/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OptionTag> = {
  title: "molecules/OptionTag",
  component: OptionTag,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof OptionTag>;

export const Default: Story = {
  render: () => {
    return (
      <OptionTag name="검색지 옵션 변경하기">
        <div>hihi</div>
      </OptionTag>
    );
  },
};
