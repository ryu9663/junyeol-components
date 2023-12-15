/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        options: ["text", "password", "search", "tel", "email", "number"],
        type: "select",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "blue", padding: "150px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const [text, setText] = useState("");
    return (
      <div style={{ display: "flex", gap: "100px" }}>
        <Input
          label={{
            htmlFor: "text",
            name: "label text",
          }}
          type={args.type || "text"}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder={args.placeholder || "placeholder"}
          validation={(value) =>
            String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
          }
        />
        <div>validation: 5글자 이상 입력 못함</div>
      </div>
    );
  },
};
