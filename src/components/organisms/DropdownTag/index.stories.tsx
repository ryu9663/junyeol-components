import { DropdownTag } from "@/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DropdownTag> = {
  title: "organisms/DropdownTag",
  component: DropdownTag,
  decorators: [(Story) => <Story />],
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
