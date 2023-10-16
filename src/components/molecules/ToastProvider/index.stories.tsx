/* eslint-disable react-hooks/rules-of-hooks */
 
import type { Meta, StoryObj } from "@storybook/react";

import { ToastProvider } from ".";
import { Button } from "@/index";
import useToast from "@/utils/hooks/useToast";
import { useState } from "react";

const meta: Meta<typeof ToastProvider> = {
  title: "atoms/ToastProvider",
  component: ToastProvider,
  args: {
    children: 'isSuccess ? "성공" : "실패"',
    type: 'isSuccess ? "success" : "fail"',
    isSpaceHolding: false,
    floatDirection: "from-top",
    holdTime: 3000,
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
  render: () => {
    const toast = useToast();
    const [isSuccess, setIsSuccess] = useState(true);
    return (
      <>
        <Button
          style={{ position: "fixed", top: "0", left: "0" }}
          onClick={() => {
            setIsSuccess((c) => !c);
            toast({
              children: isSuccess ? "성공" : "실패",
              type: isSuccess ? "success" : "fail",
              isSpaceHolding: true,
              floatDirection: "from-top",
              holdTime: 3000,
              className: "",
            });
          }}
        >
          {`3초후 사라지는 ${isSuccess ? "성공" : "실패"} 토스트`}
        </Button>
        <ToastProvider />
      </>
    );
  },
};
