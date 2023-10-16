/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";

import { ToastProvider } from ".";
import { Button } from "@/index";
import useToast from "@/utils/hooks/useToast";
import { Toast } from "@/components/atoms/Toast";

const meta: Meta<typeof Toast> = {
  title: "atoms/ToastProvider",
  component: ToastProvider,
  tags: ["autodocs"],
  argTypes: {
    children: {},
    type: {
      control: {
        control: "string",
        default: "성공",
        description: "string",
      },
    },
    isSpaceHolding: {
      control: {
        type: "boolean",
        default: false,
        dsecription: "booelan",
      },
    },
    floatDirection: {
      control: "radio",
      default: "from-top",
      options: ["from-top", "from-bottom"],
    },
    holdTime: {
      control: "number",
      default: 3000,
      description: "보이는 시간 (ms)",
    },
  },
  args: {
    children: "성공",
    type: "success",
    isSpaceHolding: true,
    floatDirection: "from-top",
    holdTime: 3000,
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => {
    const toast = useToast();

    return (
      <main style={{ height: "100vh", width: "100vw", background: "yellow" }}>
        <Button
          style={{ position: "fixed", top: "0", left: "0" }}
          onClick={() => {
            toast({
              ...args,
            });
          }}
        >
          토스트 띄우기
        </Button>
        <ToastProvider />
      </main>
    );
  },
};
