/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from ".";

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

export const 지속시간_3초: Story = {
  render: () => {
    return (
      <div
        id="toast_container"
        style={{ background: "yellow", height: "100vh", width: "100vw" }}
      >
        <Toast type="success" floatDirection="from-top" holdTime={3000}>
          <div>success</div>
        </Toast>
        <Toast type="fail" floatDirection="from-top" holdTime={3000}>
          <div>faiil</div>
        </Toast>
      </div>
    );
  },
};

export const 성공과_실패: Story = {
  render: (args) => (
    <>
      <Toast {...args} type="success" />
      <Toast {...args} type="fail" />
    </>
  ),
};
