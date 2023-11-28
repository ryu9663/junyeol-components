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
        <Input
          label={{
            htmlFor: "text",
            name: "label text",
          }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="hdddi"
          validation={(value) => {
            const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
            return regex.test(String(value)) ? "한글은 입력하지 마세요" : "";
          }}
        />
      </>
    );
  },
};
