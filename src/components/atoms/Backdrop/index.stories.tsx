import { Backdrop } from "@/components/atoms/Backdrop";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Backdrop> = {
  title: "atoms/Backdrop",
  component: Backdrop,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Backdrop onClose={() => console.log("close")} type="shadow" />
        modalbody
      </>
    );
  },
};
