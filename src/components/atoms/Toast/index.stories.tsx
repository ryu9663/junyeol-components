/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from ".";
import { Button } from "@/index";

import useToast from "@/utils/hooks/useToast";

const meta: Meta<typeof Toast> = {
  title: "atoms/Toast",
  component: Toast,
  args: {
    children: "Toast message",
    holdTime: 999999,
    type: "success",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {};

export const 삼초후_사라짐_버튼: Story = {
  render: () => {
    const toast = useToast();
    return (
      <div id="toast_container">
        <Button
          onClick={() => {
            toast({
              type: "success",
              children: <div>hihi</div>,

              floatDirection: "from-top",
              holdTime: 3000,
            });
          }}
        >
          3초후 사라지는 성공 토스트
        </Button>
      </div>
    );
  },
};

export const Type: Story = {
  render: (args) => (
    <>
      <Toast {...args} type="success" />
      <Toast {...args} type="fail" />
    </>
  ),
};
