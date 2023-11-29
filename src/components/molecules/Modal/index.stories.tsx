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
        <Modal
          onOk={() => {
            console.log("ok");
          }}
          onClose={() => console.log("close")}
          isOpen={true}
        >
          <Modal.Header>헤더</Modal.Header>
          <Modal.Body>바디</Modal.Body>
        </Modal>
      </>
    );
  },
};
