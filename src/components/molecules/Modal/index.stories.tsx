import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "molecules/Modal",
  component: Modal,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Modal />
      </>
    );
  },
};
