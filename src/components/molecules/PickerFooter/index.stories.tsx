/* eslint-disable react-hooks/rules-of-hooks */
import { PickerFooter } from "@/components/molecules/PickerFooter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PickerFooter> = {
  title: "molecules/PickerFooter",
  component: PickerFooter,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PickerFooter>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <div style={{ width: "600px", height: "300px", position: "relative" }}>
          <PickerFooter
            onCancel={() => console.log("cancel")}
            onOk={() => console.log("ok")}
          />
        </div>
      </>
    );
  },
};
