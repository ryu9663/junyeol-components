import { Backdrop } from "@/components/atoms/Backdrop";
import { Button } from "@/index";

import type { Meta, StoryObj } from "@storybook/react";
import { useState as createState } from "react";

const meta: Meta<typeof Backdrop> = {
  title: "atoms/Backdrop",
  component: Backdrop,
  argTypes: {
    type: {
      options: ["blur", "transparent", "shadow"],
      control: { type: "select" },
      defaultValue: "blur",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <main style={{ height: "40vh", width: "100vw" }}>
        <Story />
      </main>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = createState(true);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Backdrop 켜기</Button>
        <img
          src="https://junesdevlog-s3.s3.ap-northeast-2.amazonaws.com/digimon.png"
          alt="아구몬"
          width={300}
          height={300}
        />
        <Backdrop
          isOpen={isOpen}
          type={args.type || "blur"}
          onClose={() => setIsOpen(false)}
        ></Backdrop>
      </>
    );
  },
};
