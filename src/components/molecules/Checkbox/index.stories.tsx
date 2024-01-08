/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { useState as createState } from "react";
import { Button, ToastContainer, useToast as createToast } from "@/index";

const meta: Meta<typeof Checkbox> = {
  title: "molecules/Checkbox",
  component: Checkbox,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [isCheckecd, setIsChecked] = createState(false);
    return (
      <Checkbox
        value={isCheckecd}
        onChange={() => setIsChecked(!!isCheckecd)}
        label={{ htmlFor: "test", name: "마케팅 동의??" }}
      />
    );
  },
};

export const 라벨없음: Story = {
  render: () => {
    const [isCheckecd, setIsChecked] = createState(false);
    return (
      <Checkbox
        value={isCheckecd}
        onChange={() => setIsChecked(!!isCheckecd)}
      />
    );
  },
};

export const disabled: Story = {
  render: () => {
    return (
      <Checkbox
        label={{ htmlFor: "test", name: "disabled checkbox" }}
        isDisabled
      />
    );
  },
};

export const 필수항복: Story = {
  render: () => {
    const toast = createToast();
    const [isLoading, setIsLoading] = createState(false);

    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast({
              type: "success",
              children: "2초간 버튼 로딩",
              holdTime: 2000,
            });
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          }}
        >
          <Checkbox
            label={{ htmlFor: "test", name: "체크하지 말고 제출해봐" }}
            isRequired
          />
          <Button size="small" isLoading={isLoading}>
            제출
          </Button>
        </form>
        <ToastContainer />
      </>
    );
  },
};
