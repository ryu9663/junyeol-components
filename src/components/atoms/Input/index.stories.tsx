/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ padding: "150px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [text, setText] = useState("");
    return (
      <>
        <Input.Label htmlFor={"password"}>password</Input.Label>

        <Input
          type="password"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="hdddi"
          validation={(value) => {
            console.log("gg", value);
            return String(value).length > 5 ? "5글자 이하로 입력해주세요" : "";
          }}
        />
        <div>{text}</div>
      </>
    );
  },
};
